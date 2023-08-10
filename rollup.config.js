const commonjs = require('@rollup/plugin-commonjs')
const { nodeResolve: resolve } = require('@rollup/plugin-node-resolve')
const typescript = require('@rollup/plugin-typescript')
const copy = require('rollup-plugin-copy')
const { externals } = require('rollup-plugin-node-externals')
const external = require('rollup-plugin-peer-deps-external')
const postcss = require('rollup-plugin-postcss')
const { terser } = require('rollup-plugin-terser')

const packageJson = require('./package.json')

const { babel } = require('@rollup/plugin-babel')

const extensions = ['.js', '.jsx', '.ts', '.tsx']

module.exports = [
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
      externals({ react: 'react', 'react-dom': 'react-dom' }),
      typescript({ tsconfig: './tsconfig.build.json' }),
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
