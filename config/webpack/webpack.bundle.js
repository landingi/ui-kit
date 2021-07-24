require('dotenv').config()
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  bail: true,
  entry: {
    components: './client/components/package/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]_[contenthash].js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        parallel: 4,
        terserOptions: {
          compress: true,
          ecma: 2020,
          sourceMap: false,
          output: {
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
      filename: '[name]_[contenthash].css'
    }),
    new BundleAnalyzerPlugin()
  ]
})
