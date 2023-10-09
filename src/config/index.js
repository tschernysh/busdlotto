
export const Config = () => {
  if (false) {
    return {
      WEB3_BSC_URL: 'https://polygon-mainnet.infura.io',
      TOKEN_CONTRACT_ADDRESS: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      CHAIN_LOTTO_CONTRACT_ADDRESS: '0xec1c7d0F4129C199646A568F514c38A1149B2E22',
      THEGRAPH_URL: 'https://api.thegraph.com/subgraphs/name/bobur1/lotto',
      HEARTBEAT_RATE: 20,
      BASE_URL: 'https://chainlotto.io/#/',
      PROJECT_ID: '72132f1d42652af54fbe2dd3353049cb',
      CHAIN_ID: 137,
      BSC_SCAN_URL: 'https://polygonscan.com/tx/',
      BONUS_PAGE_ITEMS: 10,
    }
  } else {
    return {
      WEB3_BSC_URL: 'https://polygon-mumbai.blockpi.network/v1/rpc/public',
      TOKEN_CONTRACT_ADDRESS: '0xfaf8095a3a88bb265981404930703cb4226c510b',
      CHAIN_LOTTO_CONTRACT_ADDRESS: '0xec1c7d0F4129C199646A568F514c38A1149B2E22',
      THEGRAPH_URL: 'https://api.thegraph.com/subgraphs/name/bobur1/lotto',
      HEARTBEAT_RATE: 20,
      BASE_URL: 'https://chainlotto.io/#/',
      PROJECT_ID: '72132f1d42652af54fbe2dd3353049cb',
      CHAIN_ID: 80001,
      BSC_SCAN_URL: 'https://mumbai.polygonscan.com/tx/',
      CHAIN_LOTTO_CONTRACT: 'https://mumbai.polygonscan.com/address/',
      BONUS_PAGE_ITEMS: 5,
    }
  }
}
