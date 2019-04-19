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
function throttle5(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };
    return throttled;
}




let count = 0;
const setContent = (e) => {
    container.innerHTML = count++;
}

const container = document.querySelector('#container');

container.onmousemove = throttle(setContent,3000);