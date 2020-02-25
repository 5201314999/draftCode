# typescript demo

> 掌握typescript 基础类型的使用，复杂类型（泛型）声明文件，配置文件，运行过程，以及和现有框架的集成过程
> 本文件夹使用npm 初始化，需要babel 处理一下es6 模块化,同时引入简单webpack 来打包js 文件并启动

1. 安装全局typescript

```
 cnpm i -g typescript 
```

2. create tsconfig.json
```
tsc --init
```

3. compile ts file ,if you want to build all file，just type tsc 
```
tsc [name].ts or tsc
```

4. ts-loader  awesome-typescript-loader @babel/typescript-preset 区别

ts-loader(有检测，转化，检测比较慢，可以另外使用 fork-ts-checker-webpack-plugin单独进程检测)、awesome-typescript-loader(加速ts-loader 而开发)， @babel/typescript-preset babel 和typescript 合作产品，不能检测类型 fork-ts-checker-webpack-plugin
