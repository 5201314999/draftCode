const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  //替代 3.0 extract-text-webpack-plugin
const OptimizeCssAssetsPlugin=require("optimize-css-assets-webpack-plugin");  //压缩css
const path = require("path");

 //定义环境变量，实际应读取不同config 文件，
 process.env.NODE_ENV="development";

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: path.resolve(__dirname, "../examples/example3/src/index.js")
  },
  output: {
    filename: "static/js/[name].[contenthash:8].js", 
    path: path.resolve(__dirname, "../dist/example3"), //打包目录
    publicPath:'/example3/', //所有资源路径的base路径 ，项目打包放在根目录的话 用/, 放在非根目录的话/example3
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // "style-loader",  // css 加入js文件中
          {
            loader:MiniCssExtractPlugin.loader,// 单独分离css 文件
          }, 
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, //指定css-loader处理前最多可以经过的loader个数,设为1 好像也没区别
              modules:false,// 是否开启css 模块化
              sourceMap: process.env.NODE_ENV==='development'?true:false,
            } 
          },
          "postcss-loader", //autoprefixer 
        ]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          // "style-loader",  // css 加入js文件中
          {
            loader:MiniCssExtractPlugin.loader,// 单独分离css 文件
          }, 
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, //指定css-loader处理前最多可以经过的loader个数,设为1 好像也没区别
              modules:false,// 是否开启css 模块化
              sourceMap: process.env.NODE_ENV==='development'?true:false,
            } 
          },
          "postcss-loader", //autoprefixer 
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use:[{
          loader:'url-loader',
          options:{
            limit:2000,  //超出的图片默认用file-loader 处理，可以使用其他的loader处理
            name: '[name].[hash:7].[ext]',
            outputPath:'static/images',
          }
        }]
      },
      {
        test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:8000,
              name:'[name].[hash:7].[ext]',
              outputPath:'static/media'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      },
      // {
      //   use:[
      //     {
      //       loader:require.resolve('file-loader'),
      //       options:{
      //         name:'static/json'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(
        __dirname,
        "../examples/example3/public/index.html"
      ),
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeAttributeQuotes: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",  //基于output path
      chunkFilename: "static/css/[id].css"  //分片
    }),
    new OptimizeCssAssetsPlugin() //mode:development 也会起作用
  ]
  };

