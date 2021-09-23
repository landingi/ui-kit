const path = require('path')
const glob = require("glob")
const ESLintPlugin = require('eslint-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const entry = glob.sync('./src/shared/components/**/*.js').reduce((acc, path) => {
    const entry = path.replace(/^.*[\\\/]/, '').replace('.js','');
    acc[entry] = path;
    return acc;
  }, {})
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  bail: true,
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '@landingi/landingi-ui-kit',
    libraryTarget: 'umd',
    pathinfo: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          filename: '[name].bundle.js',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      '...',
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
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
      filename: '[name].css',
      chunkFilename: '[name][id].css'
    }),
    new ESLintPlugin({
      lintDirtyModulesOnly: true,
      threads: true,
      cache: true,
      formatter: 'table'
    })
  ]
}
