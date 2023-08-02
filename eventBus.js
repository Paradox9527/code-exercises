// EventBus 是消息传递的一种方式，基于一个消息中心
// 订阅和发布消息的模式，称为发布订阅者模式。
// 1. on('name', fn)订阅消息， name:订阅的消息名称。 fn:订阅的消息
// 2. emit('name', args) 发布消息, name：发布的消息名称，args：发布的消息

class Bus {
    constructor () {
        this.callbacks = {}
    }
    // 监听
    $on (name, fn) {
        this.callbacks[name] = this.callbacks[name] || [];
        this.callbacks[name].push(fn)
    }
    // 触发监听
    $emit(name, args) {
        if (this.callbacks[name]) {
            // 遍历所有的callback
            this.callbacks[name].forEach(cb => {
                cb(args);
            });
        }
    }
    // 去除监听
    $off(name) {
        this.callbacks[name] = [];
    }
}

// 使用 使用这个实例去调用
const EventBus = new Bus();
EventBus.$on('fn1', function(msg) {
    alert(`订阅的消息是${msg}`)
})

EventBus.$emit('fn1', "你好世界")

// 1.为了避免在监听时，事件被反复触发
// 2.由于热更新，事件可能会被多次绑定监听，这时也需要移除事件监听
// 3.未及时移除的 eventBus会导致内存泄漏

