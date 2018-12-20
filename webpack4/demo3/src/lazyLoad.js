//懒加载，执行到的时候才import 
import _ from 'lodash';
import {cube} from './math';
function component(){
    const  element= document.createElement('div');

    const button=document.createElement('button');
    button.innerHTML="load print.js module";
    element.innerHTML=_.join(['hello','webpack'],'  ');

    element.appendChild(button);

    button.onclick=()=>{
        import(/* webpackChunkName: "print" */'./print').then(res=>{
            console.log(res.default);
        })
        cube(3);
    }
    document.body.appendChild(element);

}
component();

