// gatsby-node.js
const path = require('path')
exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      // ⚠ Note the '..' in the path because the docz gatsby project lives in the `.docz` directory
      modules: [
        path.resolve(__dirname, '../src'),
        'node_modules'
      ],
      alias: {
        ui: path.resolve(
          __dirname,
          '../src/shared/components/ui'
        )
      }
    }
  })
}
