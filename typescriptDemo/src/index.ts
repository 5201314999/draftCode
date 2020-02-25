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

//模块导入
import add from './add'

console.log(`模块导入${add(3,4)}`)


//基本类型
let number='ab'



