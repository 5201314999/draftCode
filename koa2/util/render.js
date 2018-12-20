/**
 * Description 封装异步读取文件的方法
 * @authors fanjiongrong (fanjiongrong@tvflnet.com)
 * @date    2018-10-29 10:32:38
 * @version 1.0.0
 */

 const fs=require('fs');

 function render(page){
     return new Promise((resolve,reject)=>{
         let viewUrl=`./views/${page}`;
         fs.readFile(viewUrl,'binary',(err,data)=>{
             if(err){
                 reject(err)
             }
             else{
                 resolve(data)
             }
         })
     })
 }
 module.exports=render;
