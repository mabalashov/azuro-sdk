const { configure, setSelectedChainId, setWallerProvider, fetchConditions } = require('../lib')


configure({
  alchemyKey: '6KpUh1AlP_sMDJZ9PgIqGqAXDyXNsDRZ',
  infuraKey: '953608e98b6345af8cf956979d4a2e81',
})

setSelectedChainId(4)

fetchConditions()
  .then((res) => {
    console.log(333, res)
  })
  .catch((err) => {
    console.error(444, err)
  })
