type Config = {
  infuraKey: string
  alchemyKey: string
}

const config: Config = {
  infuraKey: null,
  alchemyKey: null,
}

export const configure = (_config: Partial<Config>) => {
  Object.entries(_config).forEach(([ key, value ]) => {
    config[key] = value
  })
}


export default config
