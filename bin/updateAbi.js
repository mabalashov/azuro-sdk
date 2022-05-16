const https = require('https')
const fs = require('fs')

const package = require('../package.json')


const { azuro: { contractsVersion } } = package
const abiLocalPath = './src/contracts/abis'
const abiRemotePath = `https://azuro-protocol.github.io/public-config/abis/eth/${contractsVersion}`

const abisToDownload = [ 'TestERC20.json', 'AzuroBet.json', 'Core.json', 'LP.json' ]


const download = (abiFilename) => {

  console.log(`Downloading new version of ${contractsVersion}/${abiFilename}`)

  const file = fs.createWriteStream(`${abiLocalPath}/${abiFilename}`)

  https.get(`${abiRemotePath}/${abiFilename}`, (response) => {

    response.on('data', () => {
      if (response.statusCode !== 200) {
        console.error(abiFilename, response.statusMessage)
        process.exit(1)
      }
    })

    response.pipe(file)
  })
}

if (!fs.existsSync(abiLocalPath)) {
  fs.mkdirSync(abiLocalPath)
}

abisToDownload.map(download)
