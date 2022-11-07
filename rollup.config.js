import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import externals from 'rollup-plugin-node-externals'
import copy from 'rollup-plugin-copy'

const packageJson = require('./package.json')

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default [
  {
    input: 'src/index.js',
    output: [
      {
        sourcemap: false,
        file: packageJson.main,
        format: 'cjs'
      }
    ],
    plugins: [
      externals({ react: 'react', 'react-dom': 'react-dom' }),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({ extensions }),
      external(),
      resolve({ extensions }),
      commonjs({ extensions }),
      postcss({
        modules: {
          generateScopedName: '[name]__[local]'
        },
        extract: 'app-uikit.css',
        minimize: true,
        use: [
          [
            'sass',
            {
              data: '@import "src/styles/theme.scss"; @import "src/styles/fonts-prod.scss";'
            }
          ]
        ]
      }),
      terser(),
      copy({
        targets: [
          {
            src: [
              'src/fonts/editor-icons.eot',
              'src/fonts/editor-icons.svg',
              'src/fonts/editor-icons.ttf',
              'src/fonts/editor-icons.woff',
              'src/fonts/editor-icons.woff2'
            ],
            dest: 'dist/fonts'
          }
        ]
      })
    ]
  }
]
