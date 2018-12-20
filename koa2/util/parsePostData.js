/**
 * Description 解析node 请求的post 参数
 * @authors fanjiongrong (fanjiongrong@tvflnet.com)
 * @date    2018-11-15 17:38:30
 * @version 1.0.0
 */
async function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = '';
      // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
      ctx.req.addListener('data', data => {
        postData += data;
        console.log(postData);
      });
      //结束后真正解析
      ctx.req.addListener('end', () => {
        let parsePostData = parseQueryStr(postData);
        resolve(parsePostData);
      });
    } catch (err) {
      reject(err);
    }
  });
}

function parseQueryStr(queryStr) {
  let queryData = {};
  const queryStrList = queryStr.split('&');
  console.log(queryStrList);
  for (let  queryStr of queryStrList) {
    let itemList = queryStr.split('=');
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }
  return queryData;
}

module.exports=parsePostData;
