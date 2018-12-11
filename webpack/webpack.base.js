const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  devtool: '#inline-source-map',

  entry: {
    glify: ['./src/js/index.js']
  },

  output: {
    path: path.resolve(__dirname, '..', 'lib'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
    libraryTarget: 'commonjs2'
  },

  module: {
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

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]
};
