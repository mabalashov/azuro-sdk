# sdk
Fronts SDK


```
import * as AzuroSDK from '@azuro/sdk'


AzuroSDK.configure({
  infuraKey: '',
  alchemyKey: '',
})

const games = await AzuroSDK.fetchGames()
/*
[
  {
    id: 1
    state: 0
    league: 'Ligue 1 - Round 23'
    country: 'France'
    participants: [
      {
        name: 'Olympique de Marseille'
        image: '...'
      }, {
        name: 'Olympique de Marseille'
        image: '...'
      }
    ],
    startsAt: 1643901853862
    marketRegistryId: 9
    conditions: [
      {
        odds: [
          {
            conditionId: 5701,
            outcomeId: 23,
            outcomeRegistryId: 180,
            value: 1.88
          },
          {
            conditionId: 5701,
            outcomeId: 24,
            outcomeRegistryId: 181,
            value: 2.15
          },
        ] 
      }
    ]
  },
  {
    id: 1
    state: 0
    league: 'Ligue 1 - Round 23'
    country: 'France'
    participants: [
      {
        name: 'Olympique de Marseille'
        image: '...'
      }, {
        name: 'Olympique de Marseille'
        image: '...'
      }
    ],
    startsAt: 1643901853862
    marketRegistryId: 4
    conditions: [
      {
        paramId: 1,
        odds: [
          {
            conditionId: 5739,
            outcomeId: 22,
            outcomeRegistryId: 180,
            value: 1.88
          },
          {
            conditionId: 5739,
            outcomeId: 21,
            outcomeRegistryId: 181,
            value: 2.15
          },
        ] 
      },
      {
        paramId: 2,
        odds: [
          {
            conditionId: 5742,
            outcomeId: 24,
            outcomeRegistryId: 180,
            value: 1.23
          },
          {
            conditionId: 5742,
            outcomeId: 23,
            outcomeRegistryId: 181,
            value: 3.24
          },
        ] 
      },
      {
        paramId: 3,
        odds: [
          {
            conditionId: 5755,
            outcomeId: 26,
            outcomeRegistryId: 180,
            value: 1.98
          },
          {
            conditionId: 5755,
            outcomeId: 25,
            outcomeRegistryId: 181,
            value: 2.01
          },
        ] 
      }
    ]
  }  
]
*/

```
