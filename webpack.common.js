const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  bail: true,
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '@landingi/landingi_ui_kit',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader']
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
          }
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
          include: /\/dist/,
          minify: true
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].module.css'
    }),
    new ESLintPlugin({
      lintDirtyModulesOnly: true,
      threads: true,
      cache: true,
      formatter: 'table'
    })
  ]
}
