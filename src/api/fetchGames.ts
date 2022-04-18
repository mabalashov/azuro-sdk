import fetchConditions from './fetchConditions'
import type { FetchConditionsProps, GameInfo } from './fetchConditions'
import betTypeOdd from '../helpers/betTypeOdd'


/*

  first of all we store all conditions without odds in one map by "{conditionId}" key.

  after we store all odds in other map by "{gameId}-{marketRegistryId}" key. Each odd contains "conditionId" reference
  to find related condition in conditions map.

  ---

  betVariant - one from "odds" that doesn't have pair, it's just an entity with params describing bet itself
  odds - group of betVariants related to one "condition"

 */

type Odds = {
  conditionId: number
  outcomeId: number
  outcomeRegistryId: number
  value: number
}

type BetVariant = {
  conditionId: number
  outcomeId: number
  outcomeRegistryId: number
  paramId: number | null
  value: number
}

type GameBets = Record<string, {
  gameId: number
  marketRegistryId: number
  betVariants: BetVariant[]
}>

let gamesInfo = {}
let gameBets: GameBets = {}

const groupBetVariants = (oddsArr: (BetVariant & { paramId: number })[]): Record<number, Odds[]> => {
  const group = {}

  oddsArr.forEach((odds) => {
    if (!group[odds.paramId]) {
      group[odds.paramId] = []
    }

    group[odds.paramId].push(odds)
  })

  return group
}

const groupGames = (): Game[] => {
  return Object.keys(gameBets).map((key) => {
    const { gameId, marketRegistryId, betVariants } = gameBets[key]

    const groupedBetVariants = groupBetVariants(betVariants)

    let conditions: Game['conditions']

    const paramIds = Object.keys(groupedBetVariants)

    if (paramIds.length === 1) {
      const odds = groupedBetVariants[paramIds[0]].sort((a, b) => a.outcomeId - b.outcomeId)

      conditions = [ { paramId: null, odds } ]
    }
    else {
      conditions = Object.keys(groupedBetVariants).map((paramId) => ({
        paramId: parseInt(paramId),
        odds: groupedBetVariants[paramId].sort((a, b) => b.outcomeId - a.outcomeId),
      }))
    }

    const game: Game = {
      ...gamesInfo[gameId],
      conditions,
      marketRegistryId,
    }

    return game
  })
}

type GetOddsByOutcomesProps = {
  gameId: number
  conditionId: number
  outcomes: number[]
  odds: number[]
}

const groupOddsByOutcomes = (values: GetOddsByOutcomesProps) => {
  const { gameId, conditionId, outcomes, odds } = values

  return outcomes.map((outcomeId, index) => {
    const value = odds[index]

    const { outcomeRegistryId, marketRegistryId, paramId } = betTypeOdd[outcomeId]

    const key = `${gameId}-${marketRegistryId}`

    if (!gameBets[key]) {
      gameBets[key] = {
        gameId,
        marketRegistryId,
        betVariants: [],
      }
    }

    const betVariant: Odds & { paramId: number } = {
      conditionId,
      outcomeId,
      outcomeRegistryId,
      paramId,
      value,
    }

    gameBets[key].betVariants.push(betVariant)
  })
}

type FetchGamesProps = FetchConditionsProps

export type Game = GameInfo & {
  conditions: {
    paramId: number
    odds: Odds[]
  }[]
  marketRegistryId: number
}

const fetchGames = async (props: FetchGamesProps = {}): Promise<Game[]> => {
  const conditions = await fetchConditions(props)

  conditions.forEach((condition) => {
    const { id, outcomes, odds, gameInfo } = condition

    gamesInfo[gameInfo.id] = gameInfo

    groupOddsByOutcomes({
      gameId: gameInfo.id,
      conditionId: id,
      outcomes,
      odds,
    })
  })

  const games = groupGames()

  return games.sort((a, b) => a.startsAt - b.startsAt)
}


export default fetchGames
