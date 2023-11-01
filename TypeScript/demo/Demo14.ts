abstract class Girl {
    abstract skill()// 抽象类跟一个个抽象方法 抽象方法可没有内容
}


// 每个类都继承上面的抽象类，只要继承抽象类，都得实现抽象类的方法
class Waiter extends Girl {
    skill() {
        console.log('我会普通技能');
    }
}

class BaseTeacher extends Girl {
    skill() {
        console.log('我会中等技能');
    }
}

class seniorTeacher extends Girl {
    skill() {
        console.log('我会高级技能');
    }
}

// 总结，这种适应场景，我有很多类，每个类都需要有差不多的同一个方法，
// 比如我有三个服务员都是女的，各有各的技能，那就可以通过这种抽象的方式去搞