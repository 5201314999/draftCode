const HtmlWebpackPlugin = require("html-webpack-plugin");
const{CleanWebpackPlugin}=require("clean-webapack-plugin");
const path = require("path");

console.log(__dirname);
module.exports = {
  mode: "production",
  entry: {
    home: path.resolve(__dirname, "../examples/example1/src/js/home.js"),
    goods: path.resolve(__dirname, "../examples/example1/src/js/goods.js"),
    setting: path.resolve(__dirname, "../examples/example1/src/js/setting.js")
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist/example1")
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject:true, //注入js 的控制
      favicon: path.resolve(__dirname, "../examples/example1/src/assets/favicon.ico"), 
      title: "注入标题",  
      filename: "home.html",
      template: path.resolve(
        __dirname,
        "../examples/example1/public/home.html"
      ),
      chunks: ["home"],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new HtmlWebpackPlugin({
      inject:true,
      title: "I am",
      filename: "setting.html",
      template: path.resolve(
        __dirname,
        "../examples/example1/public/setting.html"
      ),
      chunks: ["setting"],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new HtmlWebpackPlugin({
      title: "我是goods啊",
      inject: true,
      filename: "goods.html",
      meta:{viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',description:'我是炯荣做的产品'},
      template: path.resolve(
        __dirname,
        "../examples/example1/public/goods.html"
      ),
      chunks: ["goods"],
      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true,
      //   removeAttributeQuotes: true
      // }
    })
  ]
};
