import '@css/main.scss';
import {sum,generateUID} from './js/util';
import {throttle} from 'throttle-debounce'
const aa=generateUID('梦琪d',"霸绝天下");
console.log(aa);
//测试map es6语法
const arr=['html','js','css'];
arr.map(e=>{
    console.log(e);
})
document.body.innerHTML=`<div id="test">${sum(1,10)} ${performance.now()}</div>`;


document.body.addEventListener('mousemove',throttle(1000,()=>{
    console.log(performance.now());
}));
