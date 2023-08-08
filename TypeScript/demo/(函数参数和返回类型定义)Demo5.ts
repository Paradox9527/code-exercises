// function getTotal(one: number, two: number) : number {
//     return one + two
// }

// const total = getTotal(1, 2);

// 写的时候写错了,返回值后面给他加了个空字符串,没报错 但是total变成了string类型,逻辑出问题了

// 一般解决 会在total上下手,也可以在函数的返回类型上加注解 这样就能报错了

// 工作中可以这样写 
function sayHello() :void {
    console.log('Hello World')
} // 这样有返回值时,有问题就可以发现到了


// 两种情况可以使用never返回值 异常抛出(一个函数永远执行不完)  死循环  
// 异常抛出 
function errorFunction() : never{
    throw new Error();
    console.log('Hello World') // 这行永远执行不到
}
// 死循环
function forNever() : never {
    while(true){
        console.log('Hello World') 
    }
}

// 函数参数为对象解构时,不能在这个参数解构里注释,要写一个对象来注释  {one, two} : {one: number, two: number}
function add({one, two} : {one: number, two: number}) {
    return one + two;
}
const total1 = add({one: 1, two: 2})

// 一个参数也是这样的  {one} : {one: number}
// 这样写比较好