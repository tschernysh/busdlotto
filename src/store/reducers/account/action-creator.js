import Web3 from "web3";
import accountTypes from "./types";
import accountReducer from ".";
import { ApplicationActionCreator } from "../application/action-creator";
import { initWeb3 } from "utils/initWeb3";
import { Config } from "config";
import ChainLotto from 'contracts/ChainLotto.json'
import { getReferralsBonus, getTotalUserTicketsBought, getUserWinnings } from "api";

export const AccountActionCreator = {
  resetUserInfo:
    () => async (dispatch, store) => {

      dispatch(AccountActionCreator.resetUserInfoData())
      dispatch(ApplicationActionCreator.setWalletAddress(null))

    },
  setUserWinnings: (userWinnings) => ({
    type: accountTypes().SET_USER_WINNINGS,
    payload: userWinnings
  }),
  setReferralsBonus: (referralsBonus) => ({
    type: accountTypes().SET_REFERRALS_BONUS,
    payload: referralsBonus
  }),
  setAvailableRewards: (availableRewards) => ({
    type: accountTypes().SET_AVAILABLE_REWARD,
    payload: availableRewards
  }),
  setUpline: (upline) => ({
    type: accountTypes().SET_UPLINE,
    payload: upline
  }),
  setTotalTicketsBought: (totalTicketBought) => ({
    type: accountTypes().SET_TOTAL_TICKETS_BOUGHT,
    payload: totalTicketBought
  }),
  resetUserInfoData: () => ({
    type: accountTypes().RESET_USER_INFO
  }),
  getTotalTicketsBought:
    () => async (dispatch, store) => {
      const walletAddress = store().applicationReducer.walletAddress

      let totalTicketBought

      try {
        const res = await getTotalUserTicketsBought(walletAddress)
        totalTicketBought = res.ticketBoughts.reduce((acc, curr) => acc + +curr.amount, 0)
      } catch (error) {
        console.log(error)
        return
      }

      dispatch(AccountActionCreator.setTotalTicketsBought(totalTicketBought))

    },
  getUpline:
    () => async (dispatch, store) => {
      const walletRPC = store().applicationReducer.walletRPC
      const web3 = await initWeb3(walletRPC)
      const walletAddress = store().applicationReducer.walletAddress
      const chainLottoContract = new web3.eth.Contract(ChainLotto.abi, Config().CHAIN_LOTTO_CONTRACT_ADDRESS);

      let upline
      try {
        upline = await chainLottoContract.methods.referrals(walletAddress, 0).call({ from: walletAddress })
      } catch (error) {
        console.log(error)
        return
      }

      if (!upline) return

      dispatch(AccountActionCreator.setUpline(upline))
    },
  getAvailableRewards:
    () => async (dispatch, store) => {
      const walletRPC = store().applicationReducer.walletRPC
      const web3 = await initWeb3(walletRPC)
      const walletAddress = store().applicationReducer.walletAddress

      const chainLottoContract = new web3.eth.Contract(ChainLotto.abi, Config().CHAIN_LOTTO_CONTRACT_ADDRESS);

      let availableReward
      try {
        availableReward = await chainLottoContract.methods.rewardOf(walletAddress).call()
        availableReward = availableReward.toString()
        availableReward = +web3.utils.fromWei(availableReward, 'ether')
      } catch (error) {
        console.log(error)
        return
      }


      dispatch(AccountActionCreator.setAvailableRewards(availableReward))

    },
  getUserWinnings:
    () => async (dispatch, store) => {
      const walletAddress = store().applicationReducer.walletAddress
      const walletRPC = store().applicationReducer.walletRPC
      const web3 = await initWeb3(walletRPC)

      const res = await getUserWinnings(walletAddress)


      const userWinnings = {}

      res.wonDrawns.map(el => {
        let winValue = Object.values(el)[0]
        winValue = +web3.utils.fromWei(winValue, 'ether')
        if (userWinnings[winValue]) userWinnings[winValue] = userWinnings[winValue] + 1
        else userWinnings[winValue] = 1


      })

      dispatch(AccountActionCreator.setUserWinnings(userWinnings))

    },
  getReferralsBonus:
    () => async (dispatch, store) => {
      const walletRPC = store().applicationReducer.walletRPC
      const web3 = await initWeb3(walletRPC)
      const walletAddress = store().applicationReducer.walletAddress

      const res = await getReferralsBonus(walletAddress)

      console.log(res)

      const userReferralsBonus = res?.referralBonusGranteds.map(el => {
        const newCommision = +web3.utils.fromWei(el.rewardPerRefferer, 'ether')
        return { wallet: el.buyer, ticketsBought: el.numberOfTickets, level: el.level, commision: newCommision }
      })

      if (userReferralsBonus) {
        dispatch(AccountActionCreator.setReferralsBonus(userReferralsBonus))
      }

    }
} 
