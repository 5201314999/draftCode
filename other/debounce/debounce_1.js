const container = document.querySelector('#container');
let count = 0;
//对需求理解错误，实现效果错误，加上立刻之后
//正确理解 立刻执行一次，多少秒之后才能猝发下次
function debounce(fn, wait, immediate) {

    let timeout;
    let first = true;
    return function () {
        const context = this;
        if (first && immediate) {
            first = false;
            fn.apply(context);
            console.log('1');
        }
        else {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                fn.apply(context);
            }, wait);
            console.log('2');
        }
    }
}

const setContent = (e) => {
    container.innerHTML = count++;
    console.log(this);
}

container.onmousemove = debounce(setContent, 1000, true);


