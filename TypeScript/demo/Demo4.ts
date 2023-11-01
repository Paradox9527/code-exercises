// type annotation 类型注解
// type inference 类型推断

let count : number; // 类型注解 意思count是number
count = 123;

let countInference = 123; // 这也是number类型

// 工作潜规则
//  如果TS能够自动分析变量类型，我们就什么也不需要做了
//  如果TS无法分析变量类型的话，我们就需要使用类型注解

// 例子:
// 不用写类型注解的例子
const one = 1;
const two = 2;
const three = one + two;

// 需要些类型注解的例子;
function getTotal(one, two) {
    return one + two
}

const total = getTotal(1, 2);
// 这种形式的写法,vscode中 把鼠标放到两个参数上,可以看到one和two会显示any类型.这时候你传字符串,你的业务逻辑
// 就是错的,所以必须加一个类型注解,把上面的代码的参数换成这样的形式
// function getTotal(one: number, two: number){}
// 为什么total这个变量不需要加类型注解,因为当one跟two加了以后 TS就会自动通过类型推断,分析出变量的类型了

// TS也可以推断出对象中属性的类型
const xiaoJieJie = {
    name: "春华兹",
    age: 18
}
// 写完把鼠标放到对象上面,就会提示其属性的类型了

// 写TS代码的时候一种重要宗旨,每个变量,每个对象的属性类型都应该是固定的,如果你推断就让它推断,推断不出来
// 你就要给注释