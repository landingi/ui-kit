const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  entry: {
    components: './client/components/package/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](react|react-dom|@fortawesome|react-ink|yup|lodash|prop-types|axios|scheduler|simple-flexbox|object-assign|is-buffer|redux|react-redux|redux-actions|redux-saga|redux-saga-routines|tiny-emitter)[\\/]/,
          name: 'bundle',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    }),
    new BundleAnalyzerPlugin()
  ]
})
