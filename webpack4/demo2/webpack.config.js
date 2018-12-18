const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const webpack=require('webpack');
module.exports = {
 
  // JavaScript 执行入口文件
  entry: {
      app:'./src/index.js',
      print:'./src/print.js'
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[name].bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
    // mode：'development',
  },
  mode:'production',
  devtool:'inline-source-map',
  devServer:{
    contentBase:'./dist',
    // hot:true
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'输出管理'
    }),
    new CleanWebpackPlugin(['dist']),
    // new webpack.NamedChunksPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ]
};