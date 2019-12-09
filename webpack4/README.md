# webpack4 配置实践

## 执行命令

yarn `example[number]`   for example, yarn example1

## 各个demo 的测试点
## example1 html-webpack-plugin 处理

1. 配置多页面 
2. 移除注释
3. 注入个性化信息（header 信息)
4. 代码压缩 minify

## example2 css 处理

1. 预编译处理
2. 挂载方式处理
3. 合并压缩 optimize-css-assets-webpack-plugin
4. 去除或保留指定格式的注释
5. 浏览器兼容[可选]  postcss-loader (flex 没起作用,browserslist 单词写错了，汗！)
6. 模块化[可选] 
7. 响应式单位转化[可选]

## example3 assets 处理
* 基础
弄清`正则表达式/svg 知识点/字体图标库`，参照 `font/demo_index.html` 说明
* 正文
1. json,xml,img,font,video 加载(涉及到pulblicPath 的配置，分根目录和子目录），优化 
2. 雪碧图合成。 使用场景， 使用图标特别重复的，例如腾讯新闻，网易新闻，悬浮时样式切换
3. svg 处 参照 `font/demo_index.html` 说明
4. webpack resolve 和 import '~' 的关系
5. px2rem-loader 实现px to rem

`注意` ： webpack 不需要json-loader ，内部友好支持, json 不需要其他的loader ，esMoudle 引入还可以tree shaking.

遗留，雪碧图使用问题，可以合成，但是@import '~' 报错

## example4 splitchunk 处理/模块热替换 配置，第三方库的配置引入方式webpack.ProvidePlugin,css treeshaking 实现，（purifycss-webpack purify-css）,js source-map

1. js 编译 （babel、ts)
2. 代码合并 （webpack 最初基础功能）
3. 公共模块识别 (webpack 内部全局模块管理)
4. 分割 （为了分出第三方库，代码基本不更新，可放在cdn 节点加载）
    - 介于源码上线和打包成一个js 文件之间，降低首屏加载时间。
    - 缺点
        http 请求增加，服务端性能开销大
    废弃了CommonsChunkPlugin ,使用 optimization.splitChunks. optimization.runtimeChunk.

    commonsChunkPlguin 借助父子关系， 会导入多余模块。 splitChunks 有多个vendor-chunk ,形成 chunkGroup 使用，减少多余模块打包

    CommonsChunkPlugin 缺点：

    -  产出的chunk在引入的时候，会包含重复的代码；
    -  无法优化异步chunk；
    -  高优的chunk产出需要的minchunks配置比较复杂。

5. 压缩混淆 

`注意`: 如何兼容不同模块规范,原生支持cjs，兼容AMD 和 ES HARMONY

6. hot：true 同时需要 webpack.HotModuleReplacementPlugin ，默认是刷新页面

7. 生产模式默认没有 sourcemap ,压缩，无法在调试器看到源码, 开发模式默认有

8. js sourcemap 关键字的意义（影响构建速度，包大小，调试体验）

9. 使用cdn 配置第三方库 config4.js externals, index.html  <script src='cdn'>
```
evel => rebuild
inline => dataURI
cheap => lines-only
module => loader

```

11. 开发：cheap-eval-source-map 测试：none/hidden-source-map

12. hash， contenthash,chunkhash

单入口项目可采用：contenthash 用于静态文件   chunkhash 用于js hash 用于入口文件

13. 使用 compression-webpack-plugin 开启gzip 压缩

## example5 编写loader

loader支持链式调用，所以开发上需要严格遵循“单一职责”原则，即每个loader只负责自己需要负责的事情：将输入信息进行处理，并输出为下一个loader可识别的格式。

初步写了一个 把tmpl.html 转成js 的loader， 转完之后不知道用来干嘛，从网上学习的，后面再说。汗！

* webpack-bundle-analyzer,增加了打包插件配置，可以用于分析打包后各个文件的情况。  

## example6 编写plugin

插件能够 钩入（hook) webpack 触发的关键事件。让用户触及webpack 编译过程。


## 强化roadmap

1. webpack基本配置搞懂，总结并梳理(loader,plugins，opitimization)
2. 进修项目：css 如何不打包未使用的样式(css treeshaking purifyCssPlugin)，contenthash 和 hash,chunkhash(依赖解析生成的hash，文件名修改会改变，这时达不到缓存效果) 的区别，sourcemap(css-loader 开启(测试好像没起作用),devtool),treeshaking（依靠import），环境区分(静态文件最省事/动态文件灵活))，第三方库使用webpack 配置(ProvidePlugin)，异步import(借助wepack import/require.ensure()写法),cdn 引入外部库，sideEffects , package.json 设置， 或者modules 中设置 false 表示标准export，无其他问题。 optimization.sideEffects 表示是否开启此选项功能。webpack UglifyPlugin 会剔除无用模块export代码

3. 攻克webpack4 代码分割，性能优化模块。 (参考)[https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks] ，打包速度，打包效果。

分包一开始是将应用代码与库代码分开，实现动静分离，有效利用缓存, 有cdn 的情况下甚至可以把一些较大的库直接外挂在cdn 服务，进一步提高性能。

打包体积,速度： devtool, exclude/include,gzip,cdn 分割， css 抽离，treeshaking

manifest 可借用inline-manifest-webpack-plugin 直接以script 内嵌到html,减少请求

[https://segmentfault.com/a/1190000016623314](https://segmentfault.com/a/1190000016623314)






