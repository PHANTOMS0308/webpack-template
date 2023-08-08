const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // end up larger bundle size, but more detailed traceback
  devServer: {
    static: './dist',
    // HMR is enabled by default
  },
  optimization: {
    runtimeChunk: 'single', // in case you have multiple entry point
  }
});