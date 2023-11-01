// 类的访问类型，private protected public
// private 只能在类内部使用
// protected 外部也不能使用，类内部使用 但是继承的时候，是允许外部继承
class Person {
    name: string;// 如果不定义，默认是public  类的内外都可以被调用
    public sayHello(){
        console.log(this.name+ 'say hello'); // 这个this.name就是内部的调用
    }
    protected age :number
}

class Teacher extends Person {
    public sayBye() {
        this.age = 11; // 继承下来的可以使用，不报错
    }
}

const person = new Person();
person.name = 'jsli'
console.log(person.name); // 能够轻松打印
