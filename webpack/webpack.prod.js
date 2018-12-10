const merge = require('webpack-merge');
const baseWpConfig = require('./webpack.base');

module.exports = merge(baseWpConfig, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true
  }
});
