/**
 * Description koa post 请求, 没有封装，还是使用node.js 自带的方式 或者 是其他中间件
 * @authors fanjiongrong (fanjiongrong@tvflnet.com)
 * @date    2018-11-15 14:01:13
 * @version 1.0.0
 */
/**
 * 1 ctx.request 是context 经过封装的对象， ct.req 是node.js 请求对象。
 * 2 ctx.response ctx.res 同理
 */

const Koa = require('koa');
const parsePostData = require('./util/parsePostData');

const app = new Koa();

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
    let postData = await parsePostData(ctx);
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
