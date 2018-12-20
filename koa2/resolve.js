/**
 * 测试resolve.js path 模块
 */
const Koa=require('koa');
const path = require('path');

const app=new Koa();
const p=path.resolve('/src','../','view');
console.log(`p:${p}`);
const dir=path.resolve();
debugger
console.log(dir);
app.use(async(ctx) =>{
    ctx.body= p;
})

app.listen(3000);

console.log('[测试resolve.js] start-quick is starting at port 3000')




