const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const srcPath = path.resolve(__dirname, 'src')
const distPath = path.resolve(__dirname, 'dist')

module.exports = {
  context: srcPath,
  bail: true,
  entry: {
    components: srcPath
  },
  output: {
    filename: "index.js",
    path: distPath,
    libraryTarget: "umd",
    library: "landingi-ui-kit"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: srcPath,
        use: ['thread-loader', 'babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              additionalData:
                '@import "shared/styles/theme.scss";',
              sassOptions: {
                includePaths: [__dirname, srcPath],
                outputStyle: 'compressed'
              }
            }
          },
          'thread-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin({
        minimizerOptions: {
          cache: true,
          include: /\/dist/
        }
      }),
      new TerserPlugin({
        terserOptions: {
          ecma: 2020,
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new ESLintPlugin({
      lintDirtyModulesOnly: true,
      threads: true,
      cache: true,
      formatter: 'table'
    })
  ]
}
