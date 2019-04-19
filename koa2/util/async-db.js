/**
 *  promise 封装 mysql 模块
 */

 const mysql= require('mysql');
 const config=require('../config/config');
 const pool=mysql.createPool(config.db);
 
 const query = function(sql,values){
     return new Promise((resolve,reject)=>{
         pool.getConnection(function(err,connection){
             if(err){
                 reject(err);
             }
             else{
                 connection.query(sql,values,(err,rows)=>{
                     if(err){
                         reject(err);
                     }
                     else{
                         resolve(rows);
                     }
                     connection.release();
                 })
             }
         })
     })
 }

 module.exports={
     query
 }
