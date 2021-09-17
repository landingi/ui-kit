// gatsby-node.js
const path = require('path')
exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, '../src'),
        'node_modules'
      ],
      alias: {
        '@components': path.resolve(
          __dirname,
          '../src/shared/components'
        ),
        '@constants': path.resolve(
          __dirname,
          '../src/shared/constants'
        ),
        '@events': path.resolve(
          __dirname,
          '../src/shared/events'
        ),
        '@helpers': path.resolve(
          __dirname,
          '../src/shared/helpers'
        ),
        '@i18n': path.resolve(
          __dirname,
          '../src/shared/i18n'
        ),
        '@lib': path.resolve(
          __dirname,
          '../src/shared/lib'
        ),
        '@shapes': path.resolve(
          __dirname,
          '../src/shared/shapes'
        )
      }
    }
  })
}
