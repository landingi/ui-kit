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
          '@import "../src/shared/styles/theme.scss";',
        sassOptions: {
          includePaths: [__dirname, '../src'],
          outputStyle: 'compressed'
        }
      }
    }
  ]
}
