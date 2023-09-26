import Web3 from "web3";
import accountTypes from "./types";
import accountReducer from ".";
import { ApplicationActionCreator } from "../application/action-creator";
import { initWeb3 } from "utils/initWeb3";
import { Config } from "config";
import ChainLotto from 'contracts/ChainLotto.json'
import { getReferralsBonus, getUserWinnings } from "api";

export const AccountActionCreator = {
  resetUserInfo:
    () => async (dispatch, store) => {
      const userInfo = {
        payoutOf: 0,
        upline: null,
        dividents: 0,
        match_bonus: 0,
        leader_bonus: 0,
        last_payout: 0,
        total_invested: 0,
        total_withdrawn: 0,
        total_match_bonus: 0,
        leadTurnover: 0,
        leadBonusReward: 0,
        receivedBonuses: [],
        deposits: [],
        structure: [],
        referrals: 0,
        refTurnover: []
      }

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
  getUpline:
    () => async (dispatch, store) => {
      const walletRPC = store().applicationReducer.walletRPC
      const web3 = await initWeb3(walletRPC)
      const walletAddress = store().applicationReducer.walletAddress

      const chainLottoContract = new web3.eth.Contract(ChainLotto.abi, Config().CHAIN_LOTTO_CONTRACT_ADDRESS);

      let upline
      try {
        upline = await chainLottoContract.methods.referrals(walletAddress).call()
        upline = upline[0]
      } catch (error) {
        console.log(error)
        return
      }

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
      } catch (error) {
        console.log(error)
        return
      }

      dispatch(AccountActionCreator.setAvailableRewards(availableReward))

    },
  getUserWinnings:
    () => async (dispatch, store) => {
      const walletAddress = store().applicationReducer.walletAddress

      const res = await getUserWinnings(walletAddress)

      console.log(res)

    },
  getReferralsBonus:
    () => async (dispatch, store) => {
      const walletAddress = store()

      const res = await getReferralsBonus(walletAddress)

      const userReferralsBonus = res?.referralBonusGranteds.map(el => {
        return { wallet: el.buyer, ticketsBought: el.numberOfTickets, level: el.level, commision: el.rewardPerRefferer }
      })

      dispatch(AccountActionCreator.setReferralsBonus(userReferralsBonus))
    }
} 
