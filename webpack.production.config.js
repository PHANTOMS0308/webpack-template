const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'production',
  // more optimzation is coming for producion build
});