// 接口的应用interface

interface Girl {
    name: string;
    age: number;
    bust: number;
    waistline ?: number; // 当这个条件是可有可无的时候 在注释前加一个问号,就可以实现这种了
}

const girl = {
    name: '路费',
    age:18,
    bust:94
}
// 所以下面的方法可以做这样的修改 调用的时候也可以这样
const screenResume = (girl: Girl)=> {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name+ '进入面试');
    girl.age >=24 || girl.bust < 90 && console.log(girl.name+ '你被淘汰');
    girl.waistline && console.log(girl.name+ '腰围是' + girl.waistline);
    
}

// 筛选的功能
// const screenResume = (name:string, age:number, bust:number)=> {
//     age < 24 && bust >= 90 && console.log(name+ '进入面试');
//     age >=24 || bust < 90 && console.log(name+ '你被淘汰');
// }

const getResume = (name:string, age:number, bust:number)=> {
    console.log(name+ '年龄是'+ age);
    console.log(name+ '胸围是'+ bust);
}

// screenResume('大哥哥', 18, 94)
screenResume(girl);
getResume('大哥哥', 18, 94)

// 可以看到传值的参数,方法的参数完全一样,重复性可以优化,在顶部写一个接口

// 接口和类型别名的不同 接口必须要是一个对象 类型别名能直接赋一个字符串啥的

