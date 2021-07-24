const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const environmentVariables = require('./webpack.environment.js')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        use: ['thread-loader', 'babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
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
              additionalData: '@import "shared/styles/theme.scss";',
              sassOptions: {
                includePaths: [__dirname, 'src']
              }
            }
          },
          'thread-loader'
        ]
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      lintDirtyModulesOnly: true,
      threads: true,
      cache: true,
      formatter: 'table'
    }),
    environmentVariables()
  ]
}
