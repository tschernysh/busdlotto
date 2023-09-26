
export const Config = () => {
  if (false) {
    return {
      WEB3_BSC_URL: 'https://polygon-mainnet.infura.io',
      TOKEN_CONTRACT_ADDRESS: '0xfaf8095a3a88bb265981404930703cb4226c510b',
      CHAIN_LOTTO_CONTRACT_ADDRESS: '0xec1c7d0F4129C199646A568F514c38A1149B2E22',
      THEGRAPH_URL: 'https://api.thegraph.com/subgraphs/name/bobur1/lotto',
      HEARTBEAT_RATE: 20,
      BASE_URL: 'https://liquidex.tech/?ref=',
      PROJECT_ID: '72132f1d42652af54fbe2dd3353049cb',
      CHAIN_ID: 137,
      BSC_SCAN_URL: 'https://polygonscan.com/tx/'
    }
  } else {
    return {
      WEB3_BSC_URL: 'https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78',
      TOKEN_CONTRACT_ADDRESS: '0xfaf8095a3a88bb265981404930703cb4226c510b',
      CHAIN_LOTTO_CONTRACT_ADDRESS: '0xec1c7d0F4129C199646A568F514c38A1149B2E22',
      THEGRAPH_URL: 'https://api.thegraph.com/subgraphs/name/bobur1/lotto',
      HEARTBEAT_RATE: 20,
      BASE_URL: 'https://liquidex.tech/?ref=',
      PROJECT_ID: '72132f1d42652af54fbe2dd3353049cb',
      CHAIN_ID: 80001,
      BSC_SCAN_URL: 'https://mumbai.polygonscan.com/tx/'
    }
  }
}