const path = require('path');
const webpack = require('webpack');

const merge = require('webpack-merge');
const baseWpConfig = require('./webpack.base');

module.exports = merge(baseWpConfig, {
  mode: 'production',
  optimization: {
    minimize: true
  }
});
