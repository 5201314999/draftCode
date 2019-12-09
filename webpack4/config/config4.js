const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //替代 3.0 extract-text-webpack-plugin
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //压缩css
const SpritesmithPlugin = require("webpack-spritesmith"); //雪碧图合成插件
const PurifyCssPlugin=require('purifycss-webpack'); //css 过滤没用到样式
const BundleAnalyzerPlugin=require('webpack-bundle-analyzer').BundleAnalyzerPlugin;  // 打包分析工具
const InlineManifestWebpackPlugin=require('inline-manifest-webpack-plugin'); // mainfest 放置到html 中
const CompressionWebpackPlugin=require('compression-webpack-plugin'); // 开启gzip
const glob=require('glob-all');

const webpack=require('webpack');

const path = require("path");

//定义环境变量，实际应读取不同config 文件
process.env.NODE_ENV = "production";

const resolve=(pathStr)=>{
    return path.resolve(__dirname,pathStr)
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: ['@babel/polyfill',path.resolve(__dirname, "../examples/example4/src/index.js")]
  },
  externals:{
    'lodash':'_'
  },
  output: {
    filename: "static/js/[name].[hash:8].js",
    chunkFilename:'static/js/[name].[chunkhash:10].js',
    path: path.resolve(__dirname, "../dist/example4"), //打包目录
    publicPath: "/example4/" //注意：所有资源路径的base路径 ，项目打包放在根目录的话 用/, 放在非根目录的话/example4/ (dev-server 启动用'/' ，相当于根目录)
  },
  devServer: {
    open:true,
    contentBase: path.join(__dirname, '../dist/example4'),
    compress: true,
    port: 9000,
  },
  //配置source-map
  // devtool:process.env.NODE_ENV==='production'?'hidden-source-map':'cheap-eval-source-map',
  resolve: {
    extensions: [".js", ".json"], //默认值 
    alias: {
      "@": path.resolve(__dirname, "../examples/example4/src"),
      "@css": path.resolve(__dirname, "../examples/example4/src/style")
    },
    modules: [path.join(__dirname,'..','node_modules'),path.resolve(__dirname, "../dist/examples/example4/static/ico")]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          // "style-loader",  // css 加入js文件中
          {
            loader: MiniCssExtractPlugin.loader // 单独分离css 文件
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, //指定css-loader处理前最多可以经过的loader个数,设为1 好像也没区别
              modules: false, // 是否开启css 模块化
              sourceMap: process.env.NODE_ENV === "development" ? true : false
            }
          },
          "postcss-loader" //autoprefixer
        ]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          // "style-loader",  // css 加入js文件中
          {
            loader: MiniCssExtractPlugin.loader // 单独分离css 文件
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, //指定css-loader处理前最多可以经过的loader个数,设为1 好像也没区别
              modules: false, // 是否开启css 模块化
              sourceMap: process.env.NODE_ENV === "development" ? true : false
            }
          },
          "postcss-loader", //autoprefixer
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        exclude: path.resolve(__dirname, "../examples/example4/src/assets/ico"),
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 2000, //超出的图片默认用file-loader 处理，可以使用其他的loader处理
              name: "[name].[contenthash:7].[ext]",
              outputPath: "static/images"
            }
          }
        ]
      },
      {
        test:/\.svg$/,
        include:resolve('../examples/example4/src/icons'),
        use:{
            loader:'svg-sprite-loader',
            options:{
                symbolId:'icon-[name]'
            }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "[name].[contenthash:7].[ext]",
              outputPath: "static/media"
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "static/fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject:true,
      filename: "index.html",
      template: path.resolve(
        __dirname,
        "../examples/example4/public/index.html"
      ),
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeAttributeQuotes: true
      }
    }),
    // manifest 嵌入到html 中
    new InlineManifestWebpackPlugin('manifest'),
    // 实际上，项目中css,一般不使用分片,treeshaking  使用PurifyCssPlugin 插件
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css", //基于output path
      chunkFilename: "static/css/[id].css", //分片
    }),
    new PurifyCssPlugin({
      //此路径是源码的路径
      paths:glob.sync([
          resolve('../examples/example4/public/*.html'),
          resolve('../examples/example4/src/*.js')
        ])
    }),
    new OptimizeCssAssetsPlugin(), //mode:development 也会起作用，其实配置到optimization.minizer 中就好了
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, "../examples/example4/src/assets/ico"),
        glob: "*.png" //正则匹配，照着填即可
      },
      //设置导出的sprite图及对应的样式文件，必选项
      target: {
        image: path.resolve(
          __dirname,
          "../dist/example4/static/img/sprite.png"
        ),
        css: path.resolve(__dirname, "../dist/example4/static/img/sprite.scss")
      },
      //设置sprite.png的引用格式，会自己加入sprite.css的头部
      apiOptions: {
        cssImageRef: "./sprite.png" //cssImageRef为必选项
      },
      //配置spritesmith选项，非必选
      spritesmithOptions: {
        algorithm: "top-down", //设置图标的排列方式
        padding: 4 //每张小图的补白,避免雪碧图中边界部分的bug
      }
    }),
    //热模块替换，配合devserver hot:true
    new webpack.HotModuleReplacementPlugin(),
    //全局配置引入第三方库loadash，webpack.ProviderPlugin()
    // new webpack.ProvidePlugin({
    //     _:'lodash'
    // }),
    new BundleAnalyzerPlugin(),
    //文件压缩
    // new CompressionWebpackPlugin({
    //   filename: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.(js|css)$/,
    //   threshold: 4096,
    //   minRatio: 0.8
    // })

  ],
  //webpack4 废弃了commonChunkPlugin（会引入多余模块,对异步模块支持不好，懂80%） ,使用 splitChunk（chunkgroup, 对于异步模块支持更好） 和 runtimeChunk（入口基本不变）
  optimization:{
    sideEffects: false, //是否进行无效模块删除， npm 库可以在package.json 设置false说明该模块能被tree -shaking
    splitChunks:{
      chunks:'all', //'async' 只作用于异步模块 ，'initial' 对同步模块
      minSize:300, //合并前模块文件的体积
      minChunks:1, //最少被引用次数
      maxAsyncRequests:5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',//自动命名连接符
      cacheGroups:{
        vendors:{
          test:/[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {  //非第三方公共模块
          minChunks: 2, 
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },  
    runtimeChunk:{
      name:'manifest'
    }
  }
};
