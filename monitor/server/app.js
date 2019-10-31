const Koa=require('koa')
const Router=require('koa-router')
const koaStatic=require('koa-static')
const path=require('path')

const app=new Koa()

const router=new Router()

const errorInfo=[]

router.get('/',async ctx=>{
    ctx.body=`<div>欢迎您来到监控后台首页</div><div style="color:red">报错信息：<br>${errorInfo.join(" ")}<br></div>`
}).get('/alarm',async ctx=>{
    errorInfo.push(ctx.query.error)
    ctx.response.status=200
})


app.use(router.routes()).use(router.allowedMethods)

app.listen('3000',async ()=>{
    console.log('server is starting at port 3000,http://127.0.0.1:3000');
})

const webApp=new Koa()
webApp.use(koaStatic(path.join(__dirname,'../html/')))
console.log(__dirname)
webApp.listen('8089',async ()=>{
    console.log('webapp is starting at port 8089,http://127.0.0.1:8089')
})

