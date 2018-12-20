/**
 * Description 路由匹配,原生实现
 * @authors fanjiongrong (fanjiongrong@tvflnet.com)
 * @date    2018-10-29 11:33:50
 * @version 1.0.0
 */


const Koa=require('koa');
const router=require('./util/router');
const app= new Koa();

app.use(async (ctx)=>{
    const url=ctx.request.url;
    let html= await router(url);
    ctx.body=html;
})

app.listen(3000)

console.log('[demo] route-simple is starting at port 3000')



