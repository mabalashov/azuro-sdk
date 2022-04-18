import { ContractsData } from './contracts'
import CoreABI from './abis/Core.json'
import LpABI from './abis/Lp.json'
import BetABI from './abis/Bet.json'
import ERC20ABI from './abis/ERC20.json'


export const CONTRACTS: ContractsData = {
  core: {
    address: '0x0410557D9A6364E36A8C876d2bf748CF73B7782a',
    abi: CoreABI,
    decimals: 18,
  },
  lp: {
    address: '0x83cbbBAa1F22faD2e46310C5580624eaCecE5a3b',
    abi: LpABI,
    decimals: 18,
  },
  bet: {
    address: '0x1cCF59e3336bB99831870d6c1ebdC046aF342E73',
    abi: BetABI,
    decimals: 18,
  },
  usdt: {
    address: '0xe5b51cb429edB62b29cECEBACB574074cd276283',
    abi: ERC20ABI,
    decimals: 18,
  },
}
