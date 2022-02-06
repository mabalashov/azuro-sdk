import builtins from 'builtin-modules/static'
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import json from '@rollup/plugin-json'
import { uglify } from 'rollup-plugin-uglify'

import pkg from './package.json'


// const extensions = [ '.ts' ]
// const babelRuntimeVersion = pkg.dependencies['@babel/runtime'].replace(/^[^0-9]*/, '')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
    },
  ],
  external: [
    ...builtins,
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
    }),
    // uglify(),
  ],
}
