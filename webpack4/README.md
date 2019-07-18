# webpack4 配置实践

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
5. 浏览器兼容[可选]  postcss-loader
6. 模块化[可选] 
7. 响应式单位转化[可选] 

## example3 assets 处理
###基础
弄清`正则表达式/svg 知识点/字体图标库`，参照 `font/demo_index.html` 说明
### 正文
1. json,xml,img,font,video 加载(涉及到pulblicPath 的配置，分根目录和子目录），优化 
2. 雪碧图合成。 使用场景， 使用图标特别重复的，例如腾讯新闻，网易新闻，悬浮时样式切换
3. svg 处 参照 `font/demo_index.html` 说明
4. webpack resolve 和 import '~' 的关系

`注意` ： json 不需要其他的loader 

遗留，雪碧图使用问题，可以合成，但是@import '~' 报错

## example4 splitchunk 处理

1. js 编译 （babel、ts)
2. 公共模块识别
3. 分割
4. 压缩混淆