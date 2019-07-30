export const sum=(a,b,c=5)=>{
    return a+b+c;
}


const getCookie = name => {
    let arr,
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
    else return null;
  };
  
  export const generateUID = function(prefix, suffix) {
    const sessionid = getCookie("sesionid");
    let uid;
    if (sessionid) {
      uid = sessionid + Date.now().toString(36);
    } else {
      uid = Date.now().toString(36); //Create the uids in chronological order
      uid += Math.round(Math.random() * 36).toString(36); //Add a random character at the end
    }
    if (prefix) uid = prefix + uid;
    if (suffix) uid = uid + suffix;
    return uid;
  };
  
  export const log = msg => {
    var p = document.getElementById("log");
    p.innerHTML = msg + "\n" + p.innerHTML;
  };
  
  /**
   * tranfrom [x,y,x1,y1] to [{x:x,y:y},{x:x1,y:y1}]
   */
  export const transformArrToXYObj = arr => {
    const newArr = [];
    arr.forEach((e, index) => {
      if (index % 2 == 0) {
        newArr.push({
          x: e,
          y: arr[index + 1]
        });
      }
    });
    return newArr;
  };
  /**
   * @param {*} arr [{x:a,y:b},{x:c,y:d}]
   * @returns [a,b,c,d]
   */
  export const transformXYObjToArr = arr => {
    const newArr = [];
    arr.points.forEach(e => {
      newArr.concat([e.x, e.y]);
    });
    return newArr;
  };
  
  //Returns the distance between (x1,y1) and (x2,y2)
  // const dist = (x1, y1, x2, y2) => {
  //   return Math.hypot(x2 - x1, y2 - y1);
  // };
  
  //通过数学公式是铅笔顺滑 points 至少2个点[a,b,c,d]
  // export const getNewXY = (points, x, y) => {
  //   const angularity = 3;
  //   const pre_x = points[points.length - 2];
  //   const pre_y = points[points.length - 1];
  //   const penultimate_x = points[points.length - 4];
  //   const penultimate_y = points[points.length - 3];
  
  //   let vectx = x - penultimate_x;
  //   let vecty = y - penultimate_y;
  
  //   const norm = Math.hypot(vectx, vecty);
  //   const dist1 = dist(penultimate_x, penultimate_x, pre_x, pre_y) / norm,
  //     dist2 = dist(x, y, pre_x, pre_y) / norm;
  //   vectx /= angularity;
  //   vecty /= angularity;
  //   //Create 2 control points around the last point
  //   const cx1 = pre_x - dist1 * vectx,
  //     cy1 = pre_y - dist1 * vecty, //First control point
  //     cx2 = pre_x + dist2 * vectx,
  //     cy2 = pre_y + dist2 * vecty; //Second control point
  //     pre_values[2] = cx1;
  //     pre_values[3] = cy1;
  // };
  
  //生成空白小块
  export const generateEmptyBlock=(number)=>{
    const res=[];
    for(let i=0;i<number;i++){
      res.push({
        shape:'',
        fillColor:''
      });
    }
    return res;
  }
  // 计算一个点是否在一个面内
  export const isInclude=(point,leftTopPoint,width,height)=>{
    return point.x>=leftTopPoint.x&&point.x<=(leftTopPoint.x+width)&&point.y>=leftTopPoint.y&&point.y<=(leftTopPoint.y+height);
  }
  