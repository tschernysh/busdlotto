import applicationTypes from './types'
import Web3 from 'web3';
import { initWeb3 } from 'utils/initWeb3';
import ERC20 from 'contracts/ERC20.json'
import ChainLotto from 'contracts/ChainLotto.json'
import { Config } from 'config';
import { getCurrentTicketIndex, getLastWinners } from 'api';
import { AccountActionCreator } from '../account/action-creator';

export const ApplicationActionCreator = {
  setWalletAddress: (walletAddress) => ({
    type: applicationTypes().SET_WALLET_ADDRESS,
    payload: walletAddress
  }),
  setWeb3: (web3) => ({
    type: applicationTypes().SET_WEB3,
    payload: web3
  }),
  setDefaultReferrer: (walletAddress) => ({
    type: applicationTypes().SET_DEFAULT_REFERRER,
    payload: walletAddress
  }),
  setTokenBalance: (tokenBalance) => ({
    type: applicationTypes().SET_TOKEN_BALANCE,
    payload: tokenBalance
  }),
  setMaticBalance: (maticBalance) => ({
    type: applicationTypes().SET_USDT_BALANCE,
    payload: maticBalance
  }),
  setDepositData: (depositData) => ({
    type: applicationTypes().SET_DEPOSIT_DATA,
    payload: depositData
  }),
  setIsNeedToUpdate: (isNeedToUpdate) => ({
    type: applicationTypes().SET_IS_NEED_TO_UPDATE,
    payload: isNeedToUpdate
  }),
  setIsDepositTransaction: (isDepositTransaction) => ({
    type: applicationTypes().SET_IS_DEPOSIT_TRANSACTION,
    payload: isDepositTransaction
  }),
  setIsWithdrawTransaction: (isWithdrawTransaction) => ({
    type: applicationTypes().SET_IS_WITHDRAW_TRANSACTION,
    payload: isWithdrawTransaction
  }),
  setNotCorrectChain: (notCorrectChain) => ({
    type: applicationTypes().SET_NOT_CORRECT_CHAIN,
    payload: notCorrectChain
  }),
  setRedirectTo: (redirectTo) => ({
    type: applicationTypes().SET_REDIRECT_TO,
    payload: redirectTo
  }),
  setToastData: (toastData) => ({
    type: applicationTypes().SET_TOAST_DATA,
    payload: toastData
  }),
  setBuyTicketsAmount: (amount) => ({
    type: applicationTypes().SET_BUY_TICKETS_AMOUNT,
    payload: amount
  }),
  setLastWinners: (lastWinners) => ({
    type: applicationTypes().SET_LAST_WINNERS,
    payload: lastWinners
  }),
  setCurrentTicketIndex: (currentTicketIndex) => ({
    type: applicationTypes().SET_CURRENT_TICKET_INDEX,
    payload: currentTicketIndex
  }),
  setCurrentTicketIndexLoader: (loader) => ({
    type: applicationTypes().SET_CURRENT_TICKET_INDEX_LOADER,
    payload: loader
  }),
  getCurrentTicketIndex:
    () => async (dispatch, store) => {

      dispatch(ApplicationActionCreator.setCurrentTicketIndexLoader(true))

      const res = await getCurrentTicketIndex()

      if (+res.ticketBoughts[0]?.toTicket) {
        dispatch(ApplicationActionCreator.setCurrentTicketIndex(+res.ticketBoughts[0]?.toTicket))
      }

      dispatch(ApplicationActionCreator.setCurrentTicketIndexLoader(false))
    },
  getLastWinners:
    () => async (dispatch, store) => {
      const web3 = new Web3(window.ethereum)

      const res = await getLastWinners()

      const lastWinners = res.wonDrawns?.map(el => {
        let newAmount = el.amount.toString()
        newAmount = +web3.utils.fromWei(newAmount, 'ether')

        return { wallet: el.winner, time: +el.blockTimestamp, amount: newAmount }

      })

      dispatch(ApplicationActionCreator.setLastWinners(lastWinners))
    },
  getDefaultReferrer:
    () => async (dispatch, store) => {
      const walletRPC = store().applicationReducer.walletRPC
      const web3 = new Web3(Config().WEB3_BSC_URL);

      const chainLottoContract = new web3.eth.Contract(ChainLotto.abi, Config().CHAIN_LOTTO_CONTRACT_ADDRESS);

      let defaultReferrer

      try {
        defaultReferrer = await chainLottoContract.methods.developerWallet().call()
      } catch (error) {
        console.log(error)
        return
      }

      if (!defaultReferrer) return
      dispatch(ApplicationActionCreator.setDefaultReferrer(defaultReferrer))

    },
  getAccountMaticBalance:
    () => async (dispatch, store) => {

      const walletRPC = store().applicationReducer.walletRPC
      const walletAddress = store().applicationReducer.walletAddress
      const web3 = await initWeb3(walletRPC)

      let maticBalance

      try {
        maticBalance = await web3.eth.getBalance(walletAddress)
        maticBalance = maticBalance.toString()
        maticBalance = +web3.utils.fromWei(maticBalance, 'ether')
      } catch (error) {
        console.log(error)
        return
      }

      dispatch(ApplicationActionCreator.setMaticBalance(maticBalance))

    },
  getAccountTokenBalance:
    () => async (dispatch, store) => {

      const walletRPC = store().applicationReducer.walletRPC
      const web3 = await initWeb3(walletRPC)
      const walletAddress = store().applicationReducer.walletAddress

      const tokenContract = new web3.eth.Contract(ERC20.abi, Config().TOKEN_CONTRACT_ADDRESS)


      let tokenBalance



      try {
        tokenBalance = await tokenContract.methods.balanceOf(walletAddress).call()
        tokenBalance = tokenBalance.toString()
        tokenBalance = tokenBalance / 10e6
      } catch (error) {
        console.log(error)
        return
      }

      dispatch(ApplicationActionCreator.setTokenBalance(tokenBalance))

    },
  checkMetamaskWallet:
    () => async (dispatch, store) => {

      const walletRPC = store().applicationReducer.walletRPC
      const web3 = new Web3(window.ethereum)
      if (typeof window.ethereum !== 'undefined') {
        // Check if MetaMask is connected

        async function getConnectedChainId() {
          try {
            // Request the current chain ID from MetaMask
            const chainId = await web3.eth.getChainId();

            const newChainId = Number(chainId)

            return newChainId;
          } catch (error) {
            console.error('Error retrieving chain ID:', error);
            return null;
          }
        }

        const chainId = await getConnectedChainId()
        if (chainId !== Config().CHAIN_ID) {
          dispatch(ApplicationActionCreator.setNotCorrectChain(true))
          return
        }

        const connectedAccounts = await web3.eth.getAccounts()
        if (!!connectedAccounts.length) {
          const web3 = await initWeb3(walletRPC)
          dispatch(ApplicationActionCreator.setWalletAddress(window.ethereum.selectedAddress))
          console.log('Wallet is connected:', window.ethereum.selectedAddress);
        } else {
          // Wallet is not connected
          console.log('Wallet is not connected');
        }
      } else {
        // MetaMask not available
        console.log('MetaMask is not installed.');
      }
    },
  connectMetamaskWallet:
    () => async (dispatch, store) => {
      if (typeof window.ethereum !== 'undefined') {
        // Create a new Web3 instance using the MetaMask provider
        const walletRPC = store().applicationReducer.walletRPC
        const web3 = await initWeb3(walletRPC)

        async function getConnectedChainId() {
          try {
            // Request the current chain ID from MetaMask
            const chainId = await web3.eth.getChainId();

            const newChainId = Number(chainId)

            return newChainId;
          } catch (error) {
            console.error('Error retrieving chain ID:', error);
            return null;
          }
        }

        const chainId = await getConnectedChainId()
        if (chainId !== Config().CHAIN_ID) {
          dispatch(ApplicationActionCreator.setNotCorrectChain(true))
          return
        }
        let currentAddress
        try {
          const accounts = await window.ethereum.send(
            "eth_requestAccounts"
          );
          currentAddress = accounts.result[0]
          dispatch(ApplicationActionCreator.setWalletAddress(currentAddress))
        } catch (error) {
          console.error('Error connecting wallet:', error);
        }

      }
      else {
        // MetaMask not available, handle accordingly
        console.error('MetaMask is not installed.');
      }
    },
  connectConnectWallet:
    () => async (dispatch, store) => {

      const walletRPC = store().applicationReducer.walletRPC

      // Create a new Web3 instance using the MetaMask provider
      const web3 = await initWeb3(walletRPC)

      async function getConnectedChainId() {
        try {
          // Request the current chain ID from MetaMask
          const chainId = await web3.eth.getChainId();

          const newChainId = Number(chainId)

          return newChainId;
        } catch (error) {
          console.error('Error retrieving chain ID:', error);
          return null;
        }
      }

      const chainId = await getConnectedChainId()
      if (chainId !== Config().CHAIN_ID) dispatch(ApplicationActionCreator.setNotCorrectChain(true))
      const currentAddress = walletRPC.account.address
      web3.eth.defaultAccount = web3.eth.accounts[0]
      console.log('Wallet connected:', currentAddress)
      dispatch(ApplicationActionCreator.setWalletAddress(currentAddress))

    },
  withdraw:
    () => async (dispatch, store) => {
      const walletRPC = store().applicationReducer.walletRPC
      const web3 = await initWeb3(walletRPC)
      const walletAddress = store().applicationReducer.walletAddress
      const notCorrectChain = store().applicationReducer.notCorrectChain


      if (notCorrectChain) {
        dispatch(ApplicationActionCreator.setToastData({
          text: <>Change your network to the {Config().CHAIN_ID === 137 ? 'Polygon Network' : 'Mumbai'}</>,
          description: <>Incorrect network!</>
        }))
        return
      }

      dispatch(ApplicationActionCreator.setIsWithdrawTransaction(true))

      const chainLottoContract = new web3.eth.Contract(ChainLotto.abi, Config().CHAIN_LOTTO_CONTRACT_ADDRESS);

      let withdraw

      const claimData = chainLottoContract.methods.claim().encodeABI()

      try {
        withdraw = await web3.eth.sendTransaction({
          from: walletAddress,
          to: Config().CHAIN_LOTTO_CONTRACT_ADDRESS,
          data: claimData
        })

        dispatch(ApplicationActionCreator.setToastData({
          type: 'loader',
          duration: 0,
          text: <>Withdraw transaction is processing</>,
        }))
      } catch (error) {
        console.log(error)
        dispatch(ApplicationActionCreator.setIsWithdrawTransaction(false))
        if (error.code === 4001) {
          dispatch(ApplicationActionCreator.setToastData({
            text: <>User rejected the request.</>,
            description: <>Transaction error</>
          }))
        } else {
          dispatch(ApplicationActionCreator.setToastData({
            text: <>{error.message}</>,
            description: <>Transaction error</>
          }))
        }
        console.log(error.code)
        return
      }

      dispatch(ApplicationActionCreator.setIsNeedToUpdate(true))

    },
  buyTicket:
    () => async (dispatch, store) => {
      const walletRPC = store().applicationReducer.walletRPC
      const web3 = await initWeb3(walletRPC)
      const walletAddress = store().applicationReducer.walletAddress
      const defaultReferrer = store().applicationReducer.defaultReferrer
      const upline = store().accountReducer.upline
      const tokenBalance = store().applicationReducer.tokenBalance
      const ticketPriceUsdt = store().applicationReducer.ticketPriceUsdt
      const amount = store().applicationReducer.buyTicketsAmount
      const notCorrectChain = store().applicationReducer.notCorrectChain


      if (notCorrectChain) {
        dispatch(ApplicationActionCreator.setToastData({
          text: <>Change your network to the {Config().CHAIN_ID === 137 ? 'Polygon Network' : 'Mumbai'}</>,
          description: <>Incorrect network!</>
        }))
        return
      }

      if (tokenBalance < amount * ticketPriceUsdt) {
        dispatch(ApplicationActionCreator.setToastData({
          text: <>Your wallet balance is too low for the transaction.</>,
          description: <>Please top it up!</>
        }))
        return
      }

      dispatch(ApplicationActionCreator.setIsDepositTransaction(true))

      const tokenContract = new web3.eth.Contract(ERC20.abi, Config().TOKEN_CONTRACT_ADDRESS)
      const chainLottoContract = new web3.eth.Contract(ChainLotto.abi, Config().CHAIN_LOTTO_CONTRACT_ADDRESS);

      let currentReferral
      const localReferral = localStorage.getItem("refAddress");

      if (upline) currentReferral = upline
      else if (localReferral) currentReferral = localReferral
      else currentReferral = defaultReferrer

      const amountToSend = amount * ticketPriceUsdt * 10e6


      const approveData = tokenContract.methods.approve(Config().CHAIN_LOTTO_CONTRACT_ADDRESS, amountToSend).encodeABI()

      let approveToken

      try {
        approveToken = await web3.eth.sendTransaction({
          from: walletAddress,
          to: Config().TOKEN_CONTRACT_ADDRESS,
          data: approveData
        })
      } catch (error) {
        dispatch(ApplicationActionCreator.setIsDepositTransaction(false))
        if (error.code === 4001) {
          dispatch(ApplicationActionCreator.setToastData({
            text: <>User rejected the request.</>,
            description: <>Transaction error</>
          }))
        } else {
          dispatch(ApplicationActionCreator.setToastData({
            text: <>{error.message}</>,
            description: <>Transaction error</>
          }))
        }
        console.log(error.code)
        return
      }

      let depositTxn
      const buyData = chainLottoContract.methods.buyTicket(amount, currentReferral).encodeABI()
      try {
        depositTxn = await web3.eth.sendTransaction({
          from: walletAddress,
          to: Config().CHAIN_LOTTO_CONTRACT_ADDRESS,
          data: buyData
        })
      } catch (error) {
        dispatch(ApplicationActionCreator.setIsDepositTransaction(false))
        if (error.code === 4001) {
          dispatch(ApplicationActionCreator.setToastData({
            text: <>User rejected the request.</>,
            description: <>Transaction error</>
          }))
        } else {
          dispatch(ApplicationActionCreator.setToastData({
            text: <>{error.message}</>,
            description: <>Transaction error</>
          }))
        }
        console.log(error.code)
        return
      }

      dispatch(ApplicationActionCreator.setIsDepositTransaction(false))
      dispatch(ApplicationActionCreator.setIsNeedToUpdate(true))
    }
}
