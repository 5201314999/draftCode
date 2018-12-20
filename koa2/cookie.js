/**
 * Description koa cookie 操作
 * @authors fanjiongrong (fanjiongrong@tvflnet.com)
 * @date    2018-11-16 16:31:39
 * @version 1.0.0
 */
//  koa2 中操作的cookies 使用了npm 的cookies 模块
const Koa=require('koa');
const app=new Koa();

app.use(async (ctx)=>{
   if(ctx.url==='/index'){
       ctx.cookies.set('name','dd', {
           domain: 'localhost',  // 写cookie所在的域名
           path: '/',       // 写cookie所在的路径
           maxAge: 10 * 60 * 1000, // cookie有效时长
           expires: new Date('2019-02-15'),  // cookie失效时间
           httpOnly: false,  // 是否只用于http请求中获取
           overwrite: false  // 是否允许重写
         });
       ctx.body='cookies is ok';
       
       setTimeout(()=>{
           const name=ctx.cookies.get('name');
           console.log(name);
           ctx.body=`获取cookies-name:${name}`;
       },2000);
   }
   else {
       ctx.body="you are wrong";
   }
})

app.listen(3000,()=>{
   console.log('[koa cookies] is starting up at port 3000');
   console.log('http://localhost:3000');
});
