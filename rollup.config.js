import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import externals from 'rollup-plugin-node-externals'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

import packageJson from './package.json' assert { type: 'json' }

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        sourcemap: false,
        file: packageJson.main,
        format: 'cjs'
      }
    ],
    onwarn(warning, warn) {
      if (warning.code === 'THIS_IS_UNDEFINED') {
        return
      }

      warn(warning)
    },
    plugins: [
      externals({
        deps: false
      }),
      typescript({ tsconfig: './tsconfig.build.json' }),
      babel({ extensions }),
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
