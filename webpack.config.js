const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom'
  },
  plugins: [new CleanWebpackPlugin()]
})
