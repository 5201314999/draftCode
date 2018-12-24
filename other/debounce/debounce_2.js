// 第四版
//闭包。注意跟节流是不一样的，强调的是第一次立刻促发， 之后不管移动多久都不会在促发，第2次促发需要第一次停止之后wait 秒，以此类推
function debounce(func, wait, immediate) {

    var timeout;
    
    return function (e) {
        console.log(e);
        var context = this;
        var args = arguments;
        if (timeout){
            clearTimeout(timeout);
        }
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}

let count = 0;
const setContent = (e) => {
    container.innerHTML = count++;
}

const container = document.querySelector('#container');

container.onmousemove = debounce(setContent,1000, true);