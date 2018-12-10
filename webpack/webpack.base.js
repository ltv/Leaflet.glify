const path = require('path');
const fs = require('fs');

module.exports = {
  devtool: '#inline-source-map',

  entry: {
    glify: ['./src/js/index.js']
  },

  output: {
    path: path.resolve(__dirname, '..'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },

  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.js$/,
        loader: 'transform-loader?brfs'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.glsl'],
    mainFiles: ['index'],
    alias: {
      shader: path.resolve(__dirname, '..', 'src', 'shader'),
      fragment: path.resolve(__dirname, '..', 'src', 'shader', 'fragment'),
      vertex: path.resolve(__dirname, '..', 'src', 'shader', 'vertex')
    }
  },

  performance: {
    hints: false
  },

  plugins: []
};
