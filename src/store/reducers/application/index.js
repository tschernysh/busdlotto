import applicationTypes from './types'

export const initialState = {
  walletAddress: null,
  walletRPC: null,
  defaultReferrer: null,
  currentTicketIndex: 0,
  maticBalance: 0,
  tokenBalance: 0,
  ticketPriceUsdt: 10,
  isNeedToUpdate: false,
  isDepositTransaction: false,
  isWithdrawTransaction: false,
  notCorrectChain: false,
  lastWinnings: [],
  userWinnings: {
    40: 0,
    100: 0,
    1000: 0,
    10000: 0,
    100000: 0
  },
  toastData: null,
  buyTicketsAmount: 1
}

export default function applicationReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case applicationTypes().SET_WALLET_ADDRESS:
      return { ...state, walletAddress: action.payload }
    case applicationTypes().SET_WEB3:
      return { ...state, walletRPC: action.payload }
    case applicationTypes().SET_DEFAULT_REFERRER:
      return { ...state, defaultReferrer: action.payload }
    case applicationTypes().SET_USDT_BALANCE:
      return { ...state, maticBalance: action.payload }
    case applicationTypes().SET_TOKEN_BALANCE:
      return { ...state, tokenBalance: action.payload }
    case applicationTypes().SET_DEPOSIT_DATA:
      return { ...state, depositData: { ...state.depositData, ...action.payload } }
    case applicationTypes().SET_IS_NEED_TO_UPDATE:
      return { ...state, isNeedToUpdate: action.payload }
    case applicationTypes().SET_IS_DEPOSIT_TRANSACTION:
      return { ...state, isDepositTransaction: action.payload }
    case applicationTypes().SET_IS_WITHDRAW_TRANSACTION:
      return { ...state, isWithdrawTransaction: action.payload }
    case applicationTypes().SET_NOT_CORRECT_CHAIN:
      return { ...state, notCorrectChain: action.payload }
    case applicationTypes().SET_TOAST_DATA:
      return { ...state, toastData: action.payload }
    case applicationTypes().SET_BUY_TICKETS_AMOUNT:
      return { ...state, buyTicketsAmount: action.payload }
    case applicationTypes().SET_LAST_WINNERS:
      return { ...state, lastWinnings: action.payload }
    case applicationTypes().SET_CURRENT_TICKET_INDEX:
      return { ...state, currentTicketIndex: action.payload }
    default:
      return state
  }
}
