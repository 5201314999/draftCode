/**
 * Description 快速开始
 * @authors fanjiongrong (fanjiongrong@tvflnet.com)
 * @date    2018-10-29 09:53:39
 * @version 1.0.0
 */
 
 const Koa=require('koa')
 const app=new Koa()

 app.use(async(ctx) =>{
     ctx.body= 'hello koa2'
 })

 app.listen(3000)
 console.log('[demo] start-quick is starting at port 3000')
 




