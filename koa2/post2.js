/**
 * Description 使用中间件获取post 请求参数 koa-bodyparser 
 * @authors fanjiongrong (fanjiongrong@tvflnet.com)
 * @date    2018-11-15 18:38:58
 * @version 1.0.0
 */

const Koa = require('koa');
const bodyparser=require('koa-bodyparser');


const app = new Koa();

app.use(bodyparser());

app.use(async ctx => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    // 当GET请求时候返回表单页面
    let html = `
          <h1>koa2 request post demo</h1>
          <form method="POST" action="/">
            <p>userName</p>
            <input name="userName" /><br/>
            <p>nickName</p>
            <input name="nickName" /><br/>
            <p>email</p>
            <input name="email" /><br/>
            <button type="submit">submit</button>
          </form>
        `;
    ctx.body = html;
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    // 当POST请求的时候，解析POST表单里的数据，并显示出来
    let postData = ctx.request.body;
    ctx.body = postData;
  } else {
    // 其他请求显示404
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>';
  }
});

app.listen(3000, () => {
  console.log('[demo] is starting at port 3000');
  console.log('http://localhost:3000');
});





