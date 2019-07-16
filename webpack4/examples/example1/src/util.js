export default const generateUID=()=>{
    let str=Date.now().toString(36);
    str=Math.random(str).toString(36);
    return str;
}