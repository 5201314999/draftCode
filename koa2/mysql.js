/**
 *  koa 连接池链接数据库
 */

const mysql=require('mysql');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'koa'
});

pool.getConnection(function(err,conn){
    
    conn.query('select * from person',(error,results,fields)=>{
        conn.release();
        console.log(results);
        if(error) throw error;
    })
})