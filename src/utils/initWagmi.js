import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Config } from 'config'
import { configureChains, createConfig } from 'wagmi'
import { bsc, bscTestnet, polygon, polygonMumbai } from 'wagmi/chains'

export const initWagmi = () => {
  const chains = [polygon, polygonMumbai]
  const projectId = Config().PROJECT_ID

  const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient
  })
  const ethereumClient = new EthereumClient(wagmiConfig, chains)

  return { wagmiConfig, ethereumClient, projectId }
}
