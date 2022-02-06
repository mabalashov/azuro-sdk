import { parseUnits, formatUnits } from '@ethersproject/units'

import { getContract } from '../contracts'


type CalculateOddsParams = {
  conditionId: number
  amount: number
  outcomeId: number
}

// calculate odds based on actual "fundBank" values
const calculateActualOdds = async ({ conditionId, amount, outcomeId }: CalculateOddsParams): Promise<number> => {
  const betAmount = parseUnits(String(amount), 18) // TODO replace decimals - added on 7/14/21 by pavelivanov
  const result = await getContract('core').calculateOdds(conditionId, betAmount, outcomeId)
  const odd = formatUnits(result, 9)

  return parseFloat(odd)
}


export default calculateActualOdds
