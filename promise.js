// promise 一种异步编程的解决方案。
// 就是一容器对象，三种状态，pending（进行中）、fulfilled（已成功）和rejected（已失败）
// Promise对象创建的实例有三种方法 then()、catch()、finally();

// then(): 实例状态发生改变时的回调函数，返回一个promise实例，所以个可以链式调用。
// 可以带俩参数，第一个是实例状态resolved状态的回调；第二个是状态为rejected的回调；

// catch(): 可以说是用于状态rejected时，发生错误时的回调函数；一般会用这个代替then方法后面的第二个参数；

// finally(): 不管promise实例对象最后状态如何，都会执行的操作


//--------------------------------------------------- 分割线------------------------------------------------------------------//
// Promise构造函数的方法：all()、race()、allSettled()、resolve()、reject()、try();

// 1.Promise.all() 将多个promise实例，包装成一个，接受一个数组作为参数。数组成员全是promise实例。
// 特点：
// 全部fullfilled 声明的那个变量的状态才会是fullfilled。此时作为参数的那些实例的返回值会组成一个数组，传递给总的回调函数 
// 一个rejected，就是rejected。第一个rejected的返回值会传递给声明的变量的回调函数
// 注：作为参数的Promise实例有catch方法，当rejected的时候不会触发我们.all()后面写的catch方法，只会调用它实例自己的catch

// 2.Promise.race() 也是将多个promise实例，包装成一个，也是由实例组成的数组
// 特点：
// 其中参数数组中的实例，只要有一个状态变了，声明的变量的回调函数就是那个率先变化实例的返回值
// const p = Promise.race([
//     fetch('/resource-that-may-take-a-while'),
//     new Promise(function (resolve, reject) {
//         setTimeout(() => reject(new Error('request timeout')), 5000)
//     })
// ]);

// p.then(console.log).catch(console.error);

// 3.Promise.allSettled() 将多个Promise实例对象数组作为参数，包装成一个
// 特点：当全部的状态都完成了以后才会相应

// 4.Promise.resolve() 将现有对象转为promise对象。
// 4种情况
// 一、参数是个Promise实例，调用后，将原封不动得返回这个实例
// 二、参数是thenable对象，会转为Promise对象，然后立即执行这个对象的then方法
// 三、参数不是具有then() 方法的对象，或根本就不是对象，调用后会返回一个Promise对象，状态为resolved
// 四、没有参数时，直接返回一个Promise对象，状态时resolved；

// 5.Promise.reject() 返回一个状态rejected的Promise对象；
const p = Promise.reject('出错了')
// 等同于
// const p = new Promise((resolve, reject) => {
//     reject('出错了')
// })

p.then(null, function(s) {
    console.log(s);
})


//--------------------------------------------------- 分割线------------------------------------------------------------------//
// 使用场景
// 一、将图片的加载写成一个Promise，一旦加载完成，状态就会发生改变
// 二、通过all()实现多个请求合并在一起，汇总所有请求结果，只需设置一个loading即可
// 三、通过race可以设置图片请求超时