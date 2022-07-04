type Stats = {
  latestConditionsBlock: number,
}

const stats: Stats = {
  latestConditionsBlock: null,
}

export const getLatestConditionsBlock = () => stats.latestConditionsBlock

export default stats
