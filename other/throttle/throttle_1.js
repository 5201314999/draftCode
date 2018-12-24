/**
 * 时间撮
 * @param {*} func 
 * @param {*} wait 
 */

function throttle(func, wait) {
    //小技巧，设为0，第一次肯定会执行
    let lastTime=0, nowTime;
    return function () {
        let context=this;
        let arg=arguments;
        nowTime = Date.now();
        if (nowTime - lastTime >= wait) {
            func.apply(context, arg);
            lastTime = nowTime;
        }
    }
}

//定时器,基础版（功能同上，自己实现）
function throttle2(func,wait){
   let timeout;
   let context=this;
   let arg=arguments;
    return function(){
        if(!timeout){
            func.apply(context,arg);
            timeout=setTimeout(()=>{
                clearTimeout(timeout);
                timeout=null;
            },wait);
        }
   }
}

//定时器
function throttle3(func,wait){
    let timeout;
    let context=this;
    let arg=arguments;
     return function(){
         if(!timeout){
             timeout=setTimeout(()=>{
                func.apply(context,arg);
                 clearTimeout(timeout);
                 timeout=null;
             },wait);
         }
    }
 }

 //别人家的组合 一开始立刻执行,退出后延时执行一次
 /**
  * 
  * @param {} func 
  * @param {*} wait 
  * @param {*} options leading:false trailing:false
  */
 function throttle4(func,wait,options){
    let timeout;
    let preTime=0;
    options= Object.assign({},options)
    const later=()=>{
        preTime =options.leading === false ?0 :new Date().getTime();
        timeout=null;
        func.apply(context,args);
    }    
    
    
 }




let count = 0;
const setContent = (e) => {
    container.innerHTML = count++;
}

const container = document.querySelector('#container');

container.onmousemove = throttle3(setContent,2000);