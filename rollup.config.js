import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import externals from 'rollup-plugin-node-externals'
import copy from 'rollup-plugin-copy'
import url from 'postcss-url'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      }
      /* {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      } */
    ],
    plugins: [
      externals({ react: 'react', 'react-dom': 'react-dom' }),
      babel(),
      external(),
      resolve(),
      commonjs(),
      postcss({
        modules: true,
        extract: true,
        sourceMap: true,
        minimize: true,
        use: [
          [
            'sass',
            {
              data: '@import "src/styles/theme.scss";'
            }
          ]
        ]
        /* plugins: [
          url({
            url: 'inline', // enable inline assets using base64 encoding
            fallback: 'copy' // fallback method to use if max size is exceeded
          })
        ] */
      }),
      terser(),
      copy({
        targets: [
          {
            src: [
              'src/fonts/css/font/editor-icons.eot',
              'src/fonts/css/font/editor-icons.svg',
              'src/fonts/css/font/editor-icons.ttf',
              'src/fonts/css/font/editor-icons.woff',
              'src/fonts/css/font/editor-icons.woff2'
            ],
            dest: 'dist/cjs/fonts'
          }
        ]
      })
    ]
  }
]
