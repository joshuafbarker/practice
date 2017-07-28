// path is used to make simpler file paths based on directory name, and other factors
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const styles = {
  test: /\.sass$/,
  use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
}

// the configuration object
const config = {
  // define which file should include all the dependencies for webpack to look at
  entry: {
    app: './src/app.js'
  },

  // define the name and place the bundled files should be
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [styles]
  },

  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}

// export the configuration to be used while running 'webpack'
module.exports = config;
