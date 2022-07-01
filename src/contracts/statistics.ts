type Statistics = {
  latestConditionsBlock: number,
}

const statistics: Statistics = {
  latestConditionsBlock: null,
}

export const getLatestConditionsBlock = () => statistics.latestConditionsBlock

export default statistics
