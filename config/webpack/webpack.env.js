const webpack = require('webpack')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

module.exports = () => {
  const currentPath = path.join(__dirname)
  const localEnvFile = currentPath + '/.env.local'
  const productionEnvFile = currentPath + '/.env'
  const finalPath = fs.existsSync(productionEnvFile) ? productionEnvFile : localEnvFile
  const fileEnv = dotenv.config({ path: finalPath }).parsed
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next])
    return prev
  }, {})
  return new webpack.DefinePlugin(envKeys)
}
