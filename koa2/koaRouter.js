/**
 * Description 使用koa-router 中间件来实现router
 * @authors fanjiongrong (fanjiongrong@tvflnet.com)
 * @date    2018-10-29 11:42:41
 * @version 1.0.0
 */

const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
//子路由1
let home = new Router();
home.get('/', async ctx => {
  let html = `
        <ul>
            <li>
                <a href="/page/helloworld">
                    /page/helloworld
                </a>
            </li>
            <li>
                <a href="/page/404">
                    /page/404
                </a>
            </li>
        </ul>
    `;
    ctx.body=html;
});
//子路由2
let page = new Router();

page
  .get('/404', async ctx => {
    ctx.body = '404 page!';
  })
  .get('/helloworld', async ctx => {
    ctx.body = 'helloworld page!';
  });

  //装载所有子路由
  let router=new Router();
  router.use('/',home.routes(),home.allowedMethods);
  router.use('/page',page.routes(),page.allowedMethods);

  //加载路由中间件

  app.use(router.routes()).use(router.allowedMethods);

  app.listen(3000,()=>{
      console.log('koa-router-demo is starting at port 3000')
      console.log('http://localhost:3000');
  })
