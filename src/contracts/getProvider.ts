import { JsonRpcProvider, AlchemyProvider, InfuraProvider } from '@ethersproject/providers'

import state from './state'
import config from '../config'


const getProvider = (withWalletProvider?: boolean) => {
  // for dev purpose
  if (state.selectedChainId === 1337) {
    return new JsonRpcProvider()
  }

  if (state.walletProvider) {
    if (withWalletProvider) {
      return state.walletProvider.getSigner()
    }

    return state.walletProvider
  }

  if (config.rpcUrl) {
    return new JsonRpcProvider(config.rpcUrl)
  }

  // Goerli Network
  if (state.selectedChainId === 5 || !config.alchemyKey) {
    return new InfuraProvider(state.selectedChainId, config.infuraKey)
  }

  // otherwise use Alchemy provider
  return new AlchemyProvider(state.selectedChainId, config.alchemyKey)
}

export default getProvider
