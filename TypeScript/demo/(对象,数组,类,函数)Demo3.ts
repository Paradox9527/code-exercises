// 基础静态类型
const count : number = 918;
const myName : string = 'GG'
// 例如 null, undefined,boolean,void,symbol

// 对象类型
const xiaoJieJie : {
    name : string,
    age : number
} = {
    name: 'dajiao',
    age: 18
} // 最基础的对象类型

// 数组
const daGeGe : string [] = ['abc', 'def'] // 必须为字符串类型

// 类
class Person {}
const dajiao : Person = new Person();

// 函数形式
const jianXiaoJieJie : ()=> string = ()=>{ return '大哥' } // 声明一个函数，那个string的意思是必须返回字符串

// 总结：对象类型 数组类型 类类型 函数类型