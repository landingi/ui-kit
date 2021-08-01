const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [new CleanWebpackPlugin()]
})
