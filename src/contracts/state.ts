import type { Web3Provider } from '@ethersproject/providers'

import type { Contracts } from './contracts'


type State = {
  walletProvider: Web3Provider
  selectedChainId: number
  readContracts: Contracts
  writeContracts: Contracts
}

const state: State = {
  walletProvider: null,
  selectedChainId: null,
  readContracts: {} as any,
  writeContracts: {} as any,
}

export const setWallerProvider = (walletProvider: Web3Provider) => {
  state.walletProvider = walletProvider
}

export const setSelectedChainId = (selectedChainId: number) => {
  state.selectedChainId = selectedChainId
}

export default state
