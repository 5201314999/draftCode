import {AST_StatementWithBody} from "terser"

export function longestCommonPrefix(arr){
    if(arr.length==0) return ''
    let prefix=arr[0]
    for(let i=1;i<arr.length;i++){
        while(i>0&&arr[i].indexOf(prefix)!==0){
            prefix=prefix.substring(0,prefix.length-1)
        }
        if(prefix==='') return ''
    }
    return prefix
}

// 新增无用模块测试tree-shaking dead-code 
export function deadCode(females){
    for(var i=0;i<females.length;i++){
        console.log(toString(females[i]))
    }
}