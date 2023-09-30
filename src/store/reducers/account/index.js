import accountTypes from "./types";

export const initialState = {
  upline: null,
  availableReward: 0,
  referralBonusAmount: 0,
  referralsBonus: [],
  totalTicketsBought: 0,
  userWinnings: {
    40: 0,
    100: 0,
    1000: 0,
    10000: 0,
    100000: 0
  },
}

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case accountTypes().SET_USER_WINNINGS:
      return { ...state, userWinnings: { ...state.userWinnings, ...action.payload } }
    case accountTypes().SET_REFERRALS_BONUS:
      return { ...state, referralsBonus: action.payload }
    case accountTypes().SET_AVAILABLE_REWARD:
      return { ...state, availableReward: action.payload }
    case accountTypes().SET_UPLINE:
      return { ...state, upline: action.payload }
    case accountTypes().SET_TOTAL_TICKETS_BOUGHT:
      return { ...state, totalTicketsBought: action.payload }
    case accountTypes().RESET_USER_INFO:
      return {
        ...state,
        upline: null,
        availableReward: 0,
        referralBonusAmount: 0,
        referralsBonus: [],
        totalTicketsBought: 0,
        userWinnings: {
          40: 0,
          100: 0,
          1000: 0,
          10000: 0,
          100000: 0
        },
      }
    default:
      return state
  }
}
