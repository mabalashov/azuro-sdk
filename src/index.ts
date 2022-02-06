import type { Game } from './api/fetchGames'
import type { Condition, GameInfo } from './api/fetchConditions'

export type AzuroGame = Game
export type AzuroGameInfo = GameInfo
export type AzuroCondition = Condition

export * from './api'
export { setSelectedChainId, setWallerProvider } from './contracts/state'
export { configure } from './config'
export { param, outcomeRegistry, marketRegistry } from './helpers/conditions'

export const RATE_DECIMALS = 9
export const USDT_DECIMALS = 18
