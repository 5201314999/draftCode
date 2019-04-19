function buildObj(fn){
    var obj={};
    obj.__proto__=buildObj.prototype;
    fn.apply(obj);

    return obj;
}