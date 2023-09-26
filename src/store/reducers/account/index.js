import accountTypes from "./types";

export const initialState = {
  upline: null,
  availableReward: 0,
  referralBonusAmount: 10,
  referralsBonus: [],
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
      return { ...state, userWinnings: action.payload }
    case accountTypes().SET_REFERRALS_BONUS:
      return { ...state, referralsBonus: action.payload }
    case accountTypes().SET_AVAILABLE_REWARD:
      return { ...state, availableReward: action.payload }
    case accountTypes().SET_UPLINE:
      return { ...state, upliner: action.paylaod }
    default:
      return state
  }
}
