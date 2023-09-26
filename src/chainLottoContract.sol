// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

contract ChainLotto is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    using SafeERC20 for IERC20;

    enum ReferralLevel {level0, level1, level2, level3}

    VRFCoordinatorV2Interface public COORDINATOR;
    LinkTokenInterface public LINKTOKEN;

    // Coordinator address. See possible addresses 
    // in https://docs.chain.link/docs/vrf-contracts/#configurations
    address internal vrfCoordinator;

    // LINK token contract. See possible addresses
    // in https://docs.chain.link/docs/vrf-contracts/#configurations
    address internal link_token_contract;

    // The gas lane to use, which specifies the maximum gas price to bump to.
    // For a list of available gas lanes on each network,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    bytes32 internal keyHash;

    // A reasonable default is 100000, but this value could be different
    // on other networks.
    uint32 internal callbackGasLimit;

    // The default is 3, but you can set this higher.
    uint16 internal requestConfirmations;

    uint64 public s_subscriptionId;

    address public developerWallet;
    IERC20 public USDTContract;
    // Price in USDT
    uint256 public PRICE;
    uint256 public oneUSDT;
    uint256 public currentIndex;

    mapping(address => address[]) public referrals;
    // request id => To ticket
    mapping(uint256 => uint256) public requestIdToTicket;
    mapping(address => uint256) public refferalReward;
    mapping(address => uint256) internal rewards;
    mapping(uint256 => address) internal tickets;
    mapping(address => uint256) internal ticketsAmount;

    address[] referralsArray;

    event Bought(address indexed buyer, uint256 amount, uint256 toTicket, uint256 timestamp);
    event Calimed(address indexed owner, uint256 amount);
    event AddedReferral(address indexed newBuyer, address indexed referral, ReferralLevel level);
    event WinnerFound(uint256 amount, uint256 among, address indexed winner, uint256 timestamp);

    function initialize(
        address _token,
        uint8 _tokenDecimals,
        address _developer,
        uint64 _s_subscriptionId
    ) public initializer {
        __UUPSUpgradeable_init();
        __Ownable_init();

        USDTContract = IERC20(_token);
        developerWallet = _developer;

        oneUSDT = 10 ** _tokenDecimals;
        PRICE = 10 * oneUSDT;

        // Chainlink Mumbai testnet addresses
        // more info https://docs.chain.link/vrf/v2/subscription/supported-networks
        vrfCoordinator = 0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed;
        link_token_contract = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB;
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        LINKTOKEN = LinkTokenInterface(link_token_contract);

        keyHash = 0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f;
        callbackGasLimit = 100000;
        requestConfirmations = 3;
        s_subscriptionId = _s_subscriptionId;
    }

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    /*
    * Chainlink VRFConsumerBaseV2 functions
    */
    // Assumes the subscription is funded sufficiently.
    function _requestRandomWords(uint32 numOfRandomWords, uint256 toTicket) internal {
        // Will revert if subscription is not set and funded.
        uint256 requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numOfRandomWords // number of words
        );

        requestIdToTicket[requestId] = toTicket;
    }

    error OnlyCoordinatorCanFulfill(address have, address want);

    // rawFulfillRandomness is called by VRFCoordinator when it receives a valid VRF
    // proof. rawFulfillRandomness then calls fulfillRandomness, after validating
    // the origin of the call
    function rawFulfillRandomWords(uint256 requestId, uint256[] memory randomWords) external {
        if (msg.sender != vrfCoordinator) {
            revert OnlyCoordinatorCanFulfill(msg.sender, vrfCoordinator);
        }
        fulfillRandomWords(requestId, randomWords);
    }

    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory randomWords
    ) internal {
        address winner;
        if(randomWords.length >= 1) {
            winner = tickets[requestIdToTicket[_requestId] - 20 + (randomWords[0] % 20)];
            rewards[winner] += 40 * oneUSDT;
            emit WinnerFound(40 * oneUSDT, _requestId, winner, block.timestamp);
            if(randomWords.length >= 2) {
                winner = tickets[requestIdToTicket[_requestId] - 100 + (randomWords[0] % 100)];
                rewards[winner] += 100 * oneUSDT;
                emit WinnerFound(100 * oneUSDT, _requestId, winner, block.timestamp);
                if(randomWords.length >= 3) {
                    winner = tickets[requestIdToTicket[_requestId] - 1000 + (randomWords[0] % 1000)];
                    rewards[winner] += 1000 * oneUSDT;
                    emit WinnerFound(1000 * oneUSDT, _requestId, winner, block.timestamp);
                    if(randomWords.length >= 4) {
                        winner = tickets[requestIdToTicket[_requestId] - 10_000 + (randomWords[0] % 10_000)];
                        rewards[winner] += 10_000 * oneUSDT;
                        emit WinnerFound(10_000 * oneUSDT, _requestId, winner, block.timestamp);
                        if(randomWords.length >= 5) {
                            winner = tickets[requestIdToTicket[_requestId] - 100_000 + (randomWords[0] % 100_000)];
                            rewards[winner] += 100_000 * oneUSDT;
                            emit WinnerFound(100_000 * oneUSDT, _requestId, winner, block.timestamp);
                        }
                    }
                }
            }
        }
    }

    function setRequestConfirmations(uint16 _requestConfirmations) external virtual onlyOwner {
        requestConfirmations = _requestConfirmations;
    }

    function setCallbackGasLimit(uint32 _callbackGasLimit) external virtual onlyOwner {
        callbackGasLimit = _callbackGasLimit;
    }

    function setSubscriptionId(uint64 _s_subscriptionId) external virtual onlyOwner {
        s_subscriptionId = _s_subscriptionId;
    }

    function setCoordinator(address _vrfCoordinator) external virtual onlyOwner {
        vrfCoordinator = _vrfCoordinator;
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
    }

    function setLinkToken(address _link_token_contract) external virtual onlyOwner {
        link_token_contract = _link_token_contract;
        LINKTOKEN = LinkTokenInterface(link_token_contract);
    }

    function setUSDTPrice(uint256 _price) external virtual onlyOwner {
        PRICE = _price;
    }

    function setUSDTToken(address _usdtAddress) external virtual onlyOwner {
        USDTContract = IERC20(_usdtAddress);
    }

    function buyTicket(uint256 _numberOfTickets) public virtual {
        buyTicket(_numberOfTickets, developerWallet);
    }

    function buyTicket(uint256 _numberOfTickets, address _referral) public virtual {
        if((referrals[msg.sender]).length == 0) {
            _addReferral(msg.sender, _referral);
        }

        _distributeReferralRewards(msg.sender, _numberOfTickets * oneUSDT);
        USDTContract.safeTransferFrom(msg.sender, developerWallet, _numberOfTickets * oneUSDT);
        USDTContract.safeTransferFrom(msg.sender, address(this), _numberOfTickets * oneUSDT * 6);

        for(uint i = 0; i < _numberOfTickets; i++) {
            currentIndex++;
            tickets[currentIndex] = msg.sender;

            if(currentIndex % 100 == 0) {
                _searchAWinner(currentIndex);
            }
        }

        ticketsAmount[msg.sender] += _numberOfTickets;
        emit Bought(msg.sender, _numberOfTickets, currentIndex, block.timestamp);
    }

    function _distributeReferralRewards(
        address _buyer,
        uint256 _rewardPerRefferer
    ) internal virtual {
        address[] storage referrers = referrals[_buyer];

        for (uint256 i = 0; i < 3; i++) {
            refferalReward[referrers[i]] += _rewardPerRefferer;
            USDTContract.safeTransferFrom(_buyer, referrers[i], _rewardPerRefferer);
        }
    }

    function _addReferral(address _buyer, address _referral) internal virtual {
        address[] storage referralReferrals = referrals[_referral];
        address[] memory buyerReferrals = new address[](3);
        ReferralLevel currentLevel = ReferralLevel.level0;

        if((referralReferrals).length == 0) {
            for (uint256 i = 0; i < 3; i++) {
                buyerReferrals[i] = developerWallet;
            }
        } else {
            if(referralReferrals[0] == developerWallet) {
                // 1st referral of current address referral is developerWallet -> 1st level
                currentLevel = ReferralLevel.level1;
            } else if(referralReferrals[1] == developerWallet) {
                // 2nd referral of current address referral is developerWallet -> 2st level
                currentLevel = ReferralLevel.level2;
            } else {
                // if no address of developers -> level 3
                currentLevel = ReferralLevel.level3;
            }
            buyerReferrals[2] = referralReferrals[1];
            buyerReferrals[1] = referralReferrals[0];
            buyerReferrals[0] = _referral;
        }

        referrals[_buyer] = buyerReferrals;
        emit AddedReferral(_buyer, buyerReferrals[0], currentLevel);
    }

    function _searchAWinner(uint256 _currentIndex) internal virtual {
        uint32 randomNumberAmount;

        if (_currentIndex % 100 == 0) {
            randomNumberAmount = 2;
            if (_currentIndex % 1_000 == 0) {
                randomNumberAmount = 3;
                if (_currentIndex % 10_000 == 0) {
                    randomNumberAmount = 4;
                    if (_currentIndex % 100_000 == 0) {
                        randomNumberAmount = 5;
                    }
                }
            }
        }
        _requestRandomWords(randomNumberAmount, _currentIndex);
    }

    function claim(uint256 _amount) external virtual {
        require(rewards[msg.sender] >= _amount, "ChainLotto: Not enough reward amount");

        rewards[msg.sender] -= _amount;
        IERC20(USDTContract).safeTransfer(msg.sender, _amount);
        emit Calimed(msg.sender, _amount);
    }

    function rewardOf(address user) public view virtual returns(uint256) {
        return rewards[user];
    }

    function balanceTicketsOf(address _user) public view virtual returns(uint256) {
        return ticketsAmount[_user];
    }

    function withdraw() external virtual onlyOwner {
        uint256 balance = IERC20(USDTContract).balanceOf(address(this));
        IERC20(USDTContract).transfer(msg.sender, balance);
    }

    function setDeveloperWallet(address developer) external virtual onlyOwner {
        require(developer != address(0));
        developerWallet = developer;
    }
}
