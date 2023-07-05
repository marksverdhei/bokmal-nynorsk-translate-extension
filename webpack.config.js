const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',  // add this line
  entry: {
    content: path.join(__dirname, 'src', 'content.js'),
    background: path.join(__dirname, 'src', 'background.js'),
    options: path.join(__dirname, 'src', 'options.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      browser: 'webextension-polyfill'
    })
  ]
};
