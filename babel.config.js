module.exports = {
  presets: [
    // [ '@babel/preset-env', { modules: false, loose: true } ],
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-transform-runtime',
    [ '@babel/plugin-proposal-object-rest-spread', { loose: true } ],
  ],
}
