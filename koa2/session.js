/**
 * Description koa2 session 的简单使用
 * @authors fanjiongrong (fanjiongrong@tvflnet.com)
 * @date    2018-11-19 11:45:34
 * @version 1.0.0
 */

 const Koa=require('koa');
 const session=require('koa-session-minimal');
 const mysqlSession=require('koa-mysql-session');

 let store=new mysqlSession({
     user:'root',
     passworld:
 });
