import type { MarketRegistryId } from './marketRegistry'


// [marketRegistryId]: [ ...outcomeRegistryId ]
const oddsOrder: Partial<Record<MarketRegistryId, number[]>> = {
  1: [ 29, 30, 31 ],
  2: [ 38, 39, 40 ],
}

export default oddsOrder
