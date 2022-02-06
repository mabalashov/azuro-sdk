import type { Core, LP, Bet, ERC20 } from './types'

export type ContractsABI = {
  'core': Core
  'lp': LP
  'bet': Bet
  'usdt': ERC20
}

export type ContractName = keyof ContractsABI

export type ContractData<Symbol extends string> = {
  address: string
  abi: object[]
  symbol?: Symbol
  decimals?: number
}

export type ContractsData = {
  [Name in ContractName]: ContractData<string>
}

export type Contracts = {
  [Name in ContractName]: ContractsABI[Name]
}
