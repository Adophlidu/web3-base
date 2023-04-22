const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const _resolve = (...args) => resolve(process.cwd(), ...args);

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: {
    main: _resolve('./src/index.tsx'),
  },
  output: {
    filename: '[name].[contenthash].js',
    path: _resolve('./dist'),
    clean: true,
    // publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        include: /(src|cypress|tests)/,
        use: {
          loader: 'swc-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    alias: {
      '@': _resolve('./src'),
      '@components': _resolve('./src/components'),
      '@pages': _resolve('./src/pages'),
      '@layouts': _resolve('./src/layouts'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'web3-base',
      template: resolve('./public/index.html'),
    }),
  ],
  devServer: {
    port: 9999,
    hot: true,
  },
};
