const webpack=require('webpack');
const merge =require('webpack-merge');
const UglifyJSPlugin=require('uglifyjs-webpack-plugin');
const common=require('./webpack.common');

//实现 PWA 
const WorkboxPlugin =require('workbox-webpack-plugin');


module.exports=merge(common,{
    devtool:'source-map',
    plugins:[
        // new UglifyJSPlugin({
        //     sourceMap:true
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        }),
        new webpack.HashedModuleIdsPlugin(),
        //实现PWA
        new WorkboxPlugin.GenerateSW({
             // 这些选项帮助 ServiceWorkers 快速启用
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true
        })
    ]
})