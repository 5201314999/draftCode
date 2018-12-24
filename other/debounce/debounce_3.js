
//传参的方法改变(反例) e 无法传进去

const debounce = (func, wait) => {
    let timeout;
    let context = this;
    return function (e) {
        // console.log(e);
        clearTimeout(timeout);
        timeout = setTimeout(()=>{func.apply(context, e)}, wait);
    }
}


let count = 0;
const setContent = (e) => {
    console.log(e);
    container.innerHTML = count++;
}

const container = document.querySelector('#container');

container.onmousemove = debounce(setContent, 1000);