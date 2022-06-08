import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

export default [
  {
    input: 'src/index.js',
    output: [
      /*       {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      }, */
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      nodeResolve({
        extensions: ['.js']
      }),
      babel(),
      resolve(),
      commonjs(),
      postcss({
        extract: 'app-uikit.css',
        modules: true,
        use: [['sass', { data: '@import "src/styles/theme.scss";' }]]
      })
    ]
  }
]
