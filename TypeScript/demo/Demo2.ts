const count : number = 1;
// count 不能赋值其他类型得变量
// count. 可以调用number类型的一些方法

// 接口方式 自定义静态的类型
interface XiaoJieJie {
    uname: string,
    age: number
}

const xiaohong :XiaoJieJie = {
    uname: '小红',
    age: 18
}
// 自定义的类型
console.log(xiaohong.age);
