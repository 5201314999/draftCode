
/**
 * Description node.js 读取文件
 * @authors fanjiongrong (fanjiongrong@tvflnet.com)
 * @date    2018-10-29 11:33:19
 * @version 1.0.0
 */


const Koa=require('koa')
const render =require( './util/render')
const app= new Koa()

app.use(async (ctx) =>{
    let html = await render('demo1.html')
    ctx.body= html
})

app.listen(3000)

console.log('[demo] start-async is starting at port 3000')