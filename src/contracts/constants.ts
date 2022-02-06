import { ContractsData } from './contracts'
import CoreABI from './abis/Core.json'
import LpABI from './abis/Lp.json'
import BetABI from './abis/Bet.json'
import ERC20ABI from './abis/ERC20.json'


export const CONTRACTS: ContractsData = {
  core: {
    address: '0x1023DB1EFE371CC798f775284D5f2B46e83FdfFd',
    abi: CoreABI,
    decimals: 18,
  },
  lp: {
    address: '0x6Cb354C4844634509a59B0BabBa9b41aEe4d5617',
    abi: LpABI,
    decimals: 18,
  },
  bet: {
    address: '0x10F39e8e1f1ea645Ab1959e10114059e9A23B079',
    abi: BetABI,
    decimals: 18,
  },
  usdt: {
    address: '0x1267e4e7D0f17c9D390d6bEeE5655A58Df35af34',
    abi: ERC20ABI,
    decimals: 18,
  },
}
