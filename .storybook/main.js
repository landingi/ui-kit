const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  staticDirs: [{ from: '../src/fonts', to: '/fonts' }],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: {
              localIdentName: '[name]__[local]'
            }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            additionalData: '@import "src/styles/theme.scss";',
            sassOptions: {
              includePaths: [__dirname, '../']
            }
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    })

    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'file-loader'
        }
      ],
      include: path.resolve(__dirname, '../')
    })

    /*  config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../src/fonts'),
            to: 'fonts'
          }
        ]
      })
    ) */

    return config
  }
}
