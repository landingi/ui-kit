// gatsby-node.js
const path = require('path')
exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        '@components': path.resolve(__dirname, '../src/components'),
        '@constants': path.resolve(__dirname, '../src/constants'),
        '@events': path.resolve(__dirname, '../src/events'),
        '@helpers': path.resolve(__dirname, '../src/helpers'),
        '@lib': path.resolve(__dirname, '../src/lib'),
        '@shapes': path.resolve(__dirname, '../src/shapes')
      }
    }
  })
}
