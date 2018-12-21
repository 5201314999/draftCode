const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {

    // JavaScript 执行入口文件
    entry: {
        app: './src/lazyLoad.js',
        // anoter: './src/moduleB.js'
    },
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: '[name].[contenthash].bundle.js',
        //非入口chunck 的名称
        chunkFilename: '[name].[contenthash].bundle.js',
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, './dist'),
        // mode：'development',
    },
    mode: 'production',
    devServer: {
        contentBase: './dist',
        // hot:true
    },
    module: {
        //js import代码转化
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(xml)$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    plugins: [
        // 用于动态输出生成一个新的html
        new HTMLWebpackPlugin({
            title: '输出管理',
            template: 'index.html',
        }),
        // 构建之前清空dist 目录
        new CleanWebpackPlugin(['dist']),

    ],
    // 用于静态抽离出公共的模块,4.0 的配置
    // optimization: {
    //     splitChunks: {
    //         name:'common',
    //         chunks: 'all'
    //     }
    // }
    //抽离出公共的模块,利用长效缓存
    optimization:{
        runtimeChunk:'single',
        splitChunks:{
            cacheGroups:{
                vender:{
                    test:/[\\/]node_modules[\\/]/,
                    name:'vendors',
                    chunks:'all'
                }
            }
        }
    }
};