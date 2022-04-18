import { utils } from 'ethers'
import type { BigNumber } from 'ethers'

import { getContract } from '../contracts'
import calculateInitialOdds from './calculateInitialOdds'
import fetchGameIpfsData from './fetchGameIpfsData'
import { ConditionStatus } from '../helpers/enums'


export type Condition = {
  id: number
  odds: number[]
  outcomes: number[]
  gameInfo: GameInfo
}

export type GameInfo = {
  id: number
  state: ConditionStatus
  league: string
  country: string
  participants: {
    name: string
    image: string
  }[]
  startsAt: number
}

const _calculateInitialOdds = (fundBank: BigNumber[], margin: BigNumber) => {
  const fundBankSum = fundBank[0].add(fundBank[1]).toString()
  // @ts-ignore
  const funds = fundBank.map((value) => fundBankSum / value.toString())
  // @ts-ignore
  const marginality = margin.toString() / 1e9

  return calculateInitialOdds(funds, marginality)
}

export type FetchConditionsProps = {
  filters?: {
    resolved?: boolean
    canceled?: boolean
  }
}

const fetchConditions = async (props: FetchConditionsProps = {}): Promise<Condition[]> => {
  const { filters: { resolved = true, canceled = true } = {} } = props

  const coreContract = getContract('core')

  const createdFilter = coreContract.filters.ConditionCreated()
  const events = await coreContract.queryFilter(createdFilter)

  const conditions = await Promise.all(events.map(async ({ args: { conditionID } }) => {
    try {
      const id = conditionID.toNumber()

      const condition = await coreContract.getCondition(conditionID)
      const state = condition.state
      const gameId = condition.scopeID.toNumber()

      if (!resolved && state === ConditionStatus.RESOLVED) {
        return
      }

      if (!canceled && state === ConditionStatus.CANCELED) {
        return
      }

      const odds = _calculateInitialOdds(condition.fundBank, condition.margin)
      const outcomes = condition.outcomes.map((value) => value.toNumber())

      const startsAt = condition.timestamp.toNumber() * 1000
      const ipfsHashArr = utils.arrayify(condition.ipfsHash)
      const ipfsHash = utils.base58.encode([ 18, 32, ...ipfsHashArr ])
      const gameData = await fetchGameIpfsData(ipfsHash)

      return {
        id,
        outcomes,
        odds,
        gameInfo: {
          id: gameId,
          ...gameData,
          state,
          startsAt,
        },
      }
    }
    catch (err) {
      console.error(err)
      return null
    }
  }))

  return conditions.filter(Boolean)
}


export default fetchConditions
