// 类的应用
class Lady {
    content='Hi,大傻逼！'
    sayHello() {
        return this.content;
    }
}

class XiaoJieJie extends Lady{
    sayLove() {
        return 'fuck you bitch!'
    }
    // 对父类方法进行重写
    // sayHello() {
    //     return 'hello bitch!'
    // }
    // 调用父类的方法并重写
    sayHello() {
        return super.sayHello() + '你好';
    }
}

// 调用这个类
const goddess = new Lady();
// 使用继承
const gg = new XiaoJieJie()
console.log(goddess.sayHello());
console.log(gg.sayLove);
