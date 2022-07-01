export type { Game as AzuroGame } from './api/fetchGames'
export * from './api'
export {
  setSelectedChainId,
  setWalletProvider,
  setContractAddresses,
} from './contracts/state'
export { getLatestConditionsBlock } from './contracts/statistics'
export { configure } from './config'
