# 前端上报测试

## start the project
need npm and nodejs>7
1. npm install

2. npm start

open url:http://127.0.0.1:3000
and  http://127.0.0.1:8089 ,and then refresh http://127.0.0.1:3000 

3. 新增了一个有趣的测试

```
export * from './a'
export * from './b'
```
查看结果：
1. npm run build 使用 webpack 打包文件，解决浏览器不能直接使用import，export 问题
2. 打开index.html（不需要服务器） 控制台输出：测试export from，我的名字是：jr，我的年龄是：26