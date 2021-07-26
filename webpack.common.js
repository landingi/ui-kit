const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),
  mode: 'production',
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
        include: path.join(__dirname, 'src'),
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
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash].css'
    }),
    new ESLintPlugin({
      lintDirtyModulesOnly: true,
      threads: true,
      cache: true,
      formatter: 'table'
    })
  ]
}
