import '@css/main.scss';
import {sum,generateUID} from './js/util';
import {throttle} from 'throttle-debounce';
import ipconfig from './js/ipconfig';
const aa=generateUID('梦琪d',"霸绝天下1111");

console.log(aa)
//测试map es6语法
const arr=['html','js','css'];
arr.map(e=>{
    console.log(e);
})

document.querySelector('#app').innerHTML=`<div id="test">${sum(1,10)} ${performance.now()}</div>`;
const p=document.createElement('p');
p.innerHTML=ipconfig.macbook;
document.querySelector('#app').appendChild(p);
document.body.addEventListener('mousemove',throttle(1000,()=>{
    console.log(performance.now());
}));
//测试能否成功加载全局模块
const b=_.clone({name:'jr',age:25})
console.log(b)
