// 对目标对象之前设置了一层“拦截”，外界访问该对象，就要通过这个拦截，这样就形成了一种机制
// “代理”某些操作

var obj = new Proxy({}, {
    get: function(target, propKey, receiver) {
        console.log(`getting ${propKey}！`);
        return Reflect.get(target, propKey, receiver);
    },
    set: function(target, propKey, value, receiver) {
        console.log(`setting ${propKey}！`);
        return Reflect.set(target, propKey, value, receiver);
    }
});

// 对obj这个对象设置了一层代理，就是拦截，当我们要访问读取（get）操作和设置（set）操作，就要走着一层
// 例子：
// 设置值操作
obj.count = 1;// setting count  其中count就是我们上面的propkey

// 读取并且自加：
++obj.count; 
// getting count!
// setting count!  这也是vue3 响应式原理

/** --------------------------------------------------------------------------------------------------------------------------------------------------------- */
// 分割线

// ES6提供了Proxy构造函数，用来生成Proxy实例
// var proxy = new Proxy(target, handler);
// Proxy对象的所用用法，都是上面的形式，不同的就是handler这个参数里的写法了。
// new Proxy() 表示生成一个Proxy实例 target 表示要设置代理拦截的目标对象
// handler参数也是个对象，用来定制拦截的行为
// 当target设置为空对象的时候，所以默认就是该对象即上面的proxy
// 如果handler也是空的，那就等于直接通向原对象

// 例子：
// 读取属性都返回35
var proxy1 = new Proxy({}, {
    get: function (target, propKey) {
        return 35
    }
})
console.log(proxy1.name);
