interface Waiter {
    anjiao: boolean;
    say: ()=>{}
}

interface Teacher{
    anjiao:boolean;
    skill:()=>{}
}// 俩接口

// 方法里得参数有或者两种以上得就是联合类型
function judgeWho(animal: Waiter | Teacher) {
    // 此时我调用say方法，他不知道是否是有这个方法还是没有 所以要用到类型保护
    // animal.say();// 报错
    // 第一种 判断
    if(animal.anjiao){
        (animal as Teacher).skill() // as的方式 类型断言
    } else{
        (animal as Waiter).say();
    }
}

// 第二种，in语法类型保护
function judgeWhoTwo(animal: Waiter | Teacher){
    if("skill" in animal) {
        animal.skill();
    } else {
        animal.say();
    }
}

// 第三种typeof方式
function add(first: string | number, second: string | number) {
    // return first + second // 这样就会报错 她不知我这字符串相加还是啥
    if (typeof first === "string" || typeof second === 'string') {
        return `${first}${second}` 
    }
    return first + second; // 这样就不报错了
}

// 第四种 instanceof 用于类 obj这种
class NumberObj {
    count: number;
}

// 此时这个方法是一种联合类型
function addObj(first: object | NumberObj, second: object | NumberObj) {
    // return first.count + second.count // 直接写就报错了
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0
}