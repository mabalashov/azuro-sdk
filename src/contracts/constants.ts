import { ContractsData } from './contracts'
import CoreABI from './abis/Core.json'
import LpABI from './abis/Lp.json'
import AzuroBetABI from './abis/AzuroBet.json'
import TestERC20ABI from './abis/TestERC20.json'


export const CONTRACTS: ContractsData = {
  core: {
    address: '0x991da618a4c77Ac34B6F865050e8880121B8dc6d',
    abi: CoreABI,
    decimals: 18,
  },
  lp: {
    address: '0xe6C9D979c8724313D4a8EE0d48e4dA954802f134',
    abi: LpABI,
    decimals: 18,
  },
  bet: {
    address: '0x759eb026EE7bA1A94e512E593F57b823e0139501',
    abi: AzuroBetABI,
    decimals: 18,
  },
  usdt: {
    address: '0xEB18b5963BC039642f1790078039416AfbD2b6C6',
    abi: TestERC20ABI,
    decimals: 18,
  },
}
