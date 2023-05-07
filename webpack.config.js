const { resolve } = require('path')
const parse = require('yargs-parser') // 获取运行命令的参数
const { merge } = require('webpack-merge') // 合并webpack的配置
const Dotenv = require('dotenv-webpack') // 加载process.env，将.env文件中的变量写入process.env中

const _resolve = (...args) => resolve(process.cwd(), ...args)

const argv = parse(process.argv.slice(2))
const _mode = argv.mode
let _mergeConfig = {}

if (_mode) {
  _mergeConfig = require(`./config/webpack.config.${_mode}`)
}

/**
 * @type {import('webpack').Configuration}
 */
const baseConfig = {
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
      '@connectors': _resolve('./src/connectors'),
      '@config': _resolve('./src/config'),
      '@utils': _resolve('./src/utils'),
    },
  },
  plugins: [
    new Dotenv({
      path: _resolve(`.env.${_mode}`),
    }),
  ],
}

module.exports = merge(_mergeConfig, baseConfig)
