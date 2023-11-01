// private 最大的用处就是封装一个属性，都在类内部去操作，用getter跟setter来访问
class Xiaojiejie {
    constructor(private _age:number){}
    get age() {
        return this._age - 10// 可以做一些修改处理
    }
    set age(age: number) {
        this._age = age + 3 // 可以让外部去做赋值，内部做修改
    }
}

const dajie = new Xiaojiejie(18);
dajie.age = 25

console.log(dajie.age); // 可以通过这种方式获取到age


// 静态类 static
class Girl {
    static sayLove() {
        return 'fuck you bitch!'
    }
}

console.log(Girl.sayLove());// 静态类方法，不需要实例化一个对象 直接可以调用它了

// 只读属性 只允许读 不允许改
class Person {
    public readonly _name:string
    constructor(name: string){
        this._name = name;
    }
}

const person = new Person('jsli')
// person._name = '123'// 会报错
console.log(person._name);


