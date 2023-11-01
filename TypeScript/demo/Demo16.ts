// 泛型 泛指类型 generic
// function join(first: string | number, second : string | number){
//     return `${first}${second}`
// }
// join("jspang", 1)

// 当出现一种需求，我first参数如果传的是字符串类型，要求second也要传字符串类型，
// 同理如果是number 那都是number类型

// 使用泛型 <随便取>
function join<ET>(first: ET, second : ET){
    return `${first}${second}`
}
join<string>("jspang", "cpm") // 使用的时候 我就要指定泛型 当我参数传别的就会报错了
join<number>(1,2)

// 例子2 函数的泛型 
// 泛型中数组的使用
function myFun<ANY>(params:ANY[]) { // 也可以这样写 params: Array<ANY>
    return params
}

myFun<string>(["123", "356"])// 参数是数组的时候

// 多个泛型
function add<T,R>(first: T, second: R) {
    return `${first}${second}`
}

add("1", 2); // 可以类型推断，但还是写明白些好点
add<string, number>("1", 2) 