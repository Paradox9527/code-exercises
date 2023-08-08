// 接口的应用2
// 接口的应用interface

// 写一个任何东西不受到约束 

interface Girl {
    name: string;
    age: number;
    bust: number;
    waistline ?: number;
    [propname:string]:any;// 可以写任意属性,不受约束
    say(): string; // 一个方法,返回string类型的返回值
}

// 接口间的继承 继承上面的Gril
interface Teacher extends Girl{
    teach() : string
}

class Xiaojiejie implements Girl{ // 这样会受到这个接口的约束
    name='liuying'
    age=18
    bust=90
    say() {
        return '返回一个string'
    }
}

// 当下面的方法中的约束换成Teacher 我们就要加入teach的方法才能符合
const girl = {
    name: '路费',
    age:18,
    bust:94,
    waistline: 99,
    sex: '女',
    say() {
        return '返回值'
    }
}

const screenResume = (girl: Girl)=> {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name+ '进入面试');
    girl.age >=24 || girl.bust < 90 && console.log(girl.name+ '你被淘汰');
    girl.waistline && console.log(girl.name+ '腰围是' + girl.waistline);
}

const getResume = (girl: Girl)=> {
    console.log(girl.name+ '年龄是'+ girl.age);
    console.log(girl.name+ '胸围是'+ girl.bust);
    girl.waistline && console.log(girl.name+ '腰围是' + girl.waistline);
    girl.sex && console.log(girl.name+ '性别是' + girl.sex);
}

screenResume(girl);
getResume(girl)


// 接口这类其实只是在开发的过程中做了约束,当我们把ts语言编译后 转成js时,其实都不存在了这些