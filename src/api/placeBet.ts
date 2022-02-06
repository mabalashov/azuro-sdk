import type { BigNumber } from 'ethers'

import { getContract } from '../contracts'


type PlaceBetParams = {
  conditionId: number
  outcomeId: number
  amount: BigNumber
  minRate: BigNumber
}

export const placeBet = async ({ conditionId, outcomeId, amount, minRate }: PlaceBetParams) => {
  const lpContract = getContract('lp', true)

  // TODO remove this - added on 12/12/21 by pavelivanov
  const deadline = Math.floor(Date.now() / 1000) + 2000

  return lpContract.bet(
    conditionId,
    amount,
    outcomeId,
    deadline,
    minRate,
    '0x0000000000000000000000000000000000000000' // TODO add "affiliate address" - added on 12/12/21 by pavelivanov
  )
}


export default placeBet
