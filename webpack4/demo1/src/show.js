// 操作 DOM 元素，把 content 显示到网页上
const loading= require('./images/loading.png');
const mail=require('./data/basic.xml');
function show(content) {
    window.document.getElementById('app').innerText = 'Hello,' + content;
    const image=new Image();
    image.src=loading;
    document.querySelector('body').appendChild(image);
  }
console.log(mail);
  
  // 通过 CommonJS 规范导出 show 函数
  module.exports = show;