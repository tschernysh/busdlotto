
export const Config = () => {
  if (true) {
    return {
      WEB3_BSC_URL: 'https://polygon-mainnet.infura.io',
      TOKEN_CONTRACT_ADDRESS: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      STAKE_CONTRACT_ADDRESS: '0x90A3eAf71F734eDB6eACc20537bF8836235dD291',
      HEARTBEAT_RATE: 20,
      BASE_URL: 'https://liquidex.tech/?ref=',
      PROJECT_ID: '72132f1d42652af54fbe2dd3353049cb',
      CHAIN_ID: 137,
      BSC_SCAN_URL: 'https://polygonscan.com/tx/'
    }
  } else {
    return {
      WEB3_BSC_URL: 'https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78',
      TOKEN_CONTRACT_ADDRESS: '0x1E694CA11967Aa260BF32cedc9f5C09453E968d4',
      STAKE_CONTRACT_ADDRESS: '0x361AFd215007c4dd57c8F4067ba5eA78549d2b6d',
      HEARTBEAT_RATE: 20,
      BASE_URL: 'https://liquidex.tech/?ref=',
      PROJECT_ID: '72132f1d42652af54fbe2dd3353049cb',
      CHAIN_ID: 80001,
      BSC_SCAN_URL: 'https://mumbai.polygonscan.com/tx/'
    }
  }
}
