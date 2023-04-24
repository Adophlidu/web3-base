const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


/**
 * @type {import('webpack').Configuration}
*/
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'web3-base',
      template: resolve(__dirname, '../public/index.html'),
    }),
  ],
  devServer: {
    port: 9999,
    hot: true
  },
}
