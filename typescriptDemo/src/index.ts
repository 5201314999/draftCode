// 静态类型，在执行之前避免了大量错误
interface Person{
    firstName:string;
    lastName:string;
}

function greeter(person:Person){
    return 'hello' +person.firstName+' '+person.lastName;
}

let user={
    firstName:'Jane',
    lastName:'12'
}

greeter(user);
// 基础类型

// 数字
let a:any;
a=1;
console.log(a++)




