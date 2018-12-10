const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  devtool: '#inline-source-map',

  entry: {
    glify: ['./src/js/index.js'],
    vendor: ['earcut', 'leaflet', 'point-in-polygon', 'polygon-lookup', 'rbush']
  },

  output: {
    path: path.resolve(__dirname, '..', 'lib'),
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

  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 1
        }
      }
    }
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]
};
