const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  context: path.resolve(__dirname, 'src'),
  bail: true,
  entry: {
    components: './client/components/package'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]_[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
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
              additionalData: '@import "shared/styles/theme.scss";',
              sassOptions: {
                includePaths: [__dirname, 'src'],
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
    moduleIds: "hashed",
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all"
        },
        common: {
          test: /[\\/]src[\\/]client[\\/]components[\\/]package[\\/]/,
          chunks: "all"
        },
      },
    },
    minimizer: [
      '...',
      new CssMinimizerPlugin({
        minimizerOptions: {
          cache: true,
          include: /\/build/
        }
      }),
      new TerserPlugin({
        terserOptions: {
          ecma: 2020,
          format: {
            comments: false,
          },
        },
        extractComments: false,
      })
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash].css',
      chunkFilename: '[id].css'
    }),
    new ESLintPlugin({
      lintDirtyModulesOnly: true,
      threads: true,
      cache: true,
      formatter: 'table'
    })
  ]
}
