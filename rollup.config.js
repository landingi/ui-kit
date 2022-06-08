import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import externals from 'rollup-plugin-node-externals'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      externals({ react: 'react', 'react-dom': 'react-dom' }),
      babel(),
      external(),
      resolve(),
      commonjs(),
      postcss({
        // extract: 'app-uikit.css',
        modules: true,
        use: [['sass', { data: '@import "src/styles/theme.scss";' }]]
      }),
      terser()
    ]
  }
]
