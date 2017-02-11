const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),  // New
  },
  node: {
    fs: "empty"
  },
  resolve:{
    alias: {
      'handlebars' : 'handlebars/dist/handlebars.js'
    }
  },
  module: {
    loaders: [
      { test: /\.handlebars$/, loader: "handlebars-loader" }
    ]
  }
}
