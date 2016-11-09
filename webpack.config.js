//引入抽离css的插件
var webpack = require('webpack');
var Et = require('extract-text-webpack-plugin');

module.exports = {
  //入口
  entry: [
    'webpack-dev-server/client?http://localhost',
    'webpack/hot/only-dev-server',
    __dirname + '/src/scripts/app.js'

  ],
  //出口
  output: {
    path:__dirname + '/prd/',
    filename:'bundle.js'
  },
  //sourcemap
  devtool:'source-map',
  // 配置模块
  module: {
    loaders: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel'
      },
      {
        test:/\.css$/,
        loader:'style!css'
      },
      {
        test:/\.scss$/,
        loader:Et.extract('style','css!sass')
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  //vue
  vue: {
    loaders: {
      js:'babel'
    }
  },
  //plugins定义
  plugins: [
    new Et('bundle.css', {
      allChunks: true
    }),   //将抽离的文件放入prd下的bundle.css

    new webpack.HotModuleReplacementPlugin()
  ]
}
