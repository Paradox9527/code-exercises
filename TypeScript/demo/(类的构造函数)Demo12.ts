class Person {
    // public name: string;
    // constructor(name:string) {
    //     this.name = name;
    // }// 构造函数，我们在new出函数时 直接可以使用了

    constructor(public name: string){} // 这一行等于上面的全部
}

class Teacher extends Person {
    // constructor(public age: number){

    // } // 它会报错这样写；派生类的构造函数必须用super调用父类的构造函数

    constructor(public age:number){
        super('jsli') // 父类没有构造函数，我们子类要用构造函数，一样得写super()
    }
}

const person = new Person('jsli')
console.log(person.name);
const teacher = new Teacher(18);
console.log(teacher.age);
console.log(teacher.name);

