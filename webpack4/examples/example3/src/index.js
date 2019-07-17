import './style/main.scss';  //路径很重要，不要用 style/ 这种相对路径写法，会出问题

import video from './assets/media/video.mp4';

import user from './common/user';

import './assets/font/iconfont.css';

const e=document.createElement('div');
e.id='example3';
e.innerHTML=`图片，json,font，xml 打包配置${user.name}  ${user.age}`;

document.body.appendChild(e);

const vdom=document.createElement('video');
vdom.controls=true;
vdom.id='example4';
vdom.src=video;

document.body.appendChild(vdom);

const c=[1];
console.log(c[1]);

