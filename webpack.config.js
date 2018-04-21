const path = require('path')

const rules = []
rules.push({
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader'
  }
})
rules.push({
  test: /\.css$/, 
  use: {
    loader: 'css-loader' 
  }
})
rules.push({
  test: /\.(png|gif|jpg|svg|ttf|eot|woff|woff2|otf?)$/,
  use: 'file-loader?limit=20480&name=assets/[name]-[hash].[ext]'
})
const config = {
  devtool: 'source-map',
  mode: 'development',
  entry: './src/index.js',
  output: {
    path:__dirname+'/dist',
    filename:'bundle.js'
  },
  module: {
    rules
  }
}
module.exports = config
