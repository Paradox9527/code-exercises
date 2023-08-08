// 数组类型的定义
const numberArray = [1, 2, 3]; // 类型推断
const numberArr: number[] = [1, 2, 3];// 类型注释
const stringArr: string[] = ['abc', 'def', 'ghi']
const undefinedArr: undefined[] = [undefined, undefined]

// 混合的那种
const arr: (string | number)[] = [1, 'string', 2];// 可以把后面的写好,用ts的推断来写

// 提供了一类型别名 type alias
type Lady = {name: string, age:number}
class Mandom {
    name:string;
    age:number
}

const xiaojiejieS :{name: string, age:number}[]= [
    {name:'小站', age: 18},
    {name:'去你妈', age: 29}
]// 这样写很长,需要一个简便的方式  

// 用上面的类型别名替换一下就可以了;const xiaojiejieS :Lady[] = []
// 也可以用类的方式 const xiaojiejieS :Mandom[] = []

