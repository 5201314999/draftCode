
export default (content,map,meta)=>{
    let res='';
    content.trim().split(/(\r?\n)/).forEach(line=>{
        res+=line;
    });
    
    return `let str=${res};\n module.exports=str`;
}