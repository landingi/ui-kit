// gatsby-config.js
module.exports = {
  flags: {
    FAST_REFRESH: true
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        additionalData:
          '@import "../src/styles/theme.scss"; @import "../src/styles/fonts-dev.scss";',
        cssLoaderOptions: {
          camelCase: false,
          localIdentName: '[name]__[local]'
        },
        useResolveUrlLoader: true
      }
    }
  ]
}
