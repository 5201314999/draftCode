//懒加载，执行到的时候才import 
import _ from 'lodash';
import {add} from './math';

//PWA 注册serviceWorker代码
if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError =>{
            console.log('SW registration failed: ', registrationError);
        })
    })
}

function component(){
    const  element= document.createElement('div');

    const button=document.createElement('button');
    button.innerHTML="load print.js module";
    element.innerHTML=_.join(['hello','webpack'],'  ');

    element.appendChild(button);
    add(3,1);
    button.onclick=()=>{
        import(/* webpackChunkName: "print" */'./print').then(res=>{
            console.log(res.default);
        });
    }
    document.body.appendChild(element);

}
component();

