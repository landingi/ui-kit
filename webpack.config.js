const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  externals: {
    'react-router': 'react-router',
    react: 'react',
    'react-dom': 'react-dom',
    'react-redux': 'react-redux'
  },
  plugins: [new CleanWebpackPlugin()]
})
