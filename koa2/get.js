/**
 * Description 获取get 请求参数
 * @authors fanjiongrong (fanjiongrong@tvflnet.com)
 * @date    2018-11-15 11:27:06
 * @version 1.0.0
 */

 const Koa=require('koa');
 
 const app=new Koa();

 app.use(async (ctx) =>{
     //从request 对象取
     let url=ctx.url;
     console.log(ctx.request);
     let request=ctx.request;
     let req_query=ctx.request.query;
     let req_querystring=ctx.request.querystring;
     
     //从上下文中取
     let ctx_query=ctx.query;
     let ctx_querystring=ctx.querystring;

     ctx.body={
         url,
         req_query,
         req_querystring,
         ctx_query,
         ctx_querystring
     }
 })


 app.listen(3000);
 
 console.log('[demo] is starting at port 3000');
 console.log('http://localhost:3000');

