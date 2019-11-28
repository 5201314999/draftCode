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

## example4 splitchunk 处理/模块热替换 配置

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

7. 生产模式默认没有 sourcemap ,无法在调试器看到源码, 开发模式默认有

## example5 编写loader

loader支持链式调用，所以开发上需要严格遵循“单一职责”原则，即每个loader只负责自己需要负责的事情：将输入信息进行处理，并输出为下一个loader可识别的格式。

初步写了一个 把tmpl.html 转成js 的loader， 转完之后不知道用来干嘛，从网上学习的，后面再说。汗！

* webpack-bundle-analyzer,增加了打包插件配置，可以用于分析打包后各个文件的情况。  


## example6 编写plugin

插件能够 钩入（hook) webpack 触发的关键事件。让用户触及webpack 编译过程。

