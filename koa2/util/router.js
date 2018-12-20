/**
 * Description 封装异步读取文件的方法
 * @authors fanjiongrong (fanjiongrong@tvflnet.com)
 * @date    2018-10-29 10:32:38
 * @version 1.0.0
 */

const fs=require('fs');

async function render(page){
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

async function router(url){
   let param;
   switch(url){
       case '/':param='index';break;
       case '/404':param='404';break;
       case '/todo':param='todo';break;
       default:break;
   }
  let html=await render(`${param}.html`);
   return html;
}



module.exports =router

