const targetMap = new WeakMap();
let activeEffect = null;
function effect(fn) {
	activeEffect = fn;
	activeEffect();
	activeEffect = null; //执行后置空
}
function track(target, key) {
	if (!activeEffect) return;
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        targetMap.set(target, depsMap = new Map())
    }

    let dep = depsMap.get(key)
    if (!dep) {
        depsMap.set(key, dep = new Set())
    }
    // 这里先暂且写死 写死可太蠢了
    // if (target === person) {
    //     if (key === 'name') {
    //         dep.add(effectNameStr1)
    //         dep.add(effectNameStr2)
    //     } else {
    //         dep.add(effectAgeStr1)
    //         dep.add(effectAgeStr2)
    //     }
    // } else if (target === animal) {
    //     if (key === 'type') {
    //         dep.add(effectTypeStr1)
    //         dep.add(effectTypeStr2)
    //     } else {
    //         dep.add(effectHeightStr1)
    //         dep.add(effectHeightStr2)
    //     }
    // }
	dep.add(activeEffect);
}

function trigger(target, key) {
    let depsMap = targetMap.get(target)
    if (depsMap) {
        const dep = depsMap.get(key)
        if (dep) {
            dep.forEach(effect => effect())
        }
    }
}

// 每次改变对象值，都要重新调用一次，手动的

// 使用Proxy解决这个问题
function reactive(target) {
	const handler = {
		get(target, key, receiver) {
			track(receiver, key)// 访问时收集依赖
			console.log("收集依赖");
			return Reflect.get(target, key, receiver);
		},
		set(target, key, value, receiver) {
			console.log("数据更新");
			Reflect.set(target, key, value, receiver);
			trigger(receiver, key);// 设值时自动更新
		}
	}

	return new Proxy(target, handler);
}

// 测试一下
// 多对象
// const person = { name: '李金锋', age: 22 }
// const animal = { type: '猫', height: 50 }

// let nameStr1 = ''
// let nameStr2 = ''
// let ageStr1 = ''
// let ageStr2 = ''
// let typeStr1 = ''
// let typeStr2 = ''
// let heightStr1 = ''
// let heightStr2 = ''

// const effectNameStr1 = () => { nameStr1 = `${person.name}是个大菜鸟` }
// const effectNameStr2 = () => { nameStr2 = `${person.name}是个小天才` }
// const effectAgeStr1 = () => { ageStr1 = `${person.age}岁已经算很老了` }
// const effectAgeStr2 = () => { ageStr2 = `${person.age}岁还算很年轻啊` }
// const effectTypeStr1 = () => { typeStr1 = `${animal.type}是个大菜鸟` }
// const effectTypeStr2 = () => { typeStr2 = `${animal.type}是个小天才` }
// const effectHeightStr1 = () => { heightStr1 = `${animal.height}已经算很高了` }
// const effectHeightStr2 = () => { heightStr2 = `${animal.height}还算很矮啊` }

// // 不用proxy的调用 手动调用
// track(person, 'name') // 收集person.name的依赖
// track(person, 'age') // 收集person.age的依赖
// track(animal, 'type') // animal.type的依赖
// track(animal, 'height') // 收集animal.height的依赖

// effectNameStr1()
// effectNameStr2()
// effectAgeStr1()
// effectAgeStr2()
// effectTypeStr1()
// effectTypeStr2()
// effectHeightStr1()
// effectHeightStr2()

// console.log(nameStr1, nameStr2, ageStr1, ageStr2)

// person.name = 'sunshine_lin'
// person.age = 18
// animal.type = '猫'
// animal.height = 20

// // 数值改变了，需要再调用一下trigger，不调用的话还是原来的值
// trigger(person, 'name')
// trigger(person, 'age')
// trigger(animal, 'type')
// trigger(animal, 'height')
// console.log(nameStr1, nameStr2, ageStr1, ageStr2)

// ----------------------------------------------------------------------------------------------------------------------------------------------------
console.log("-------------------------------------------------------------------------------------------------------------------------------------------------");

// 使用proxy,将对象传入reactive
const person = reactive({ name: '我是你大爷', age: 22 });
const animal = reactive({ type: '狗', height: 50 });

let nameStr1 = ''
let nameStr2 = ''
let ageStr1 = ''
let ageStr2 = ''
let typeStr1 = ''
let typeStr2 = ''
let heightStr1 = ''
let heightStr2 = ''

const effectNameStr1 = () => { nameStr1 = `${person.name}是个大菜鸟` }
const effectNameStr2 = () => { nameStr2 = `${person.name}是个小天才` }
const effectAgeStr1 = () => { ageStr1 = `${person.age}岁已经算很老了` }
const effectAgeStr2 = () => { ageStr2 = `${person.age}岁还算很年轻啊` }
const effectTypeStr1 = () => { typeStr1 = `${animal.type}是个大菜鸟` }
const effectTypeStr2 = () => { typeStr2 = `${animal.type}是个小天才` }
const effectHeightStr1 = () => { heightStr1 = `${animal.height}已经算很高了` }
const effectHeightStr2 = () => { heightStr2 = `${animal.height}还算很矮啊` }


// effectNameStr1()
// effectNameStr2()
// effectAgeStr1()
// effectAgeStr2()
// effectTypeStr1()
// effectTypeStr2()
// effectHeightStr1()
// effectHeightStr2()

// 不写死后调用
// 每个effect函数改成这么执行
effect(effectNameStr1)
effect(effectNameStr2)
effect(effectAgeStr1)
effect(effectAgeStr2)
effect(effectTypeStr1)
effect(effectTypeStr2)
effect(effectHeightStr1)
effect(effectHeightStr2)

console.log(nameStr1, nameStr2, ageStr1, ageStr2)

person.name = 'sunshine_lin'
person.age = 18
animal.type = '猫'
animal.height = 20

console.log(nameStr1, nameStr2, ageStr1, ageStr2)


// ref 实现

// vue3里使用ref 直接就let num = ref(5) console.log(num.value)

// 基础实现
function ref(initValue) {
	return reactive({
		value: initValue
	})
}

let num = ref(5)

effect(() => sum = num.value * 100)

console.log(sum) // 500

num.value = 10

console.log(sum) // 1000


// 简单实现computed
function computed(fn) {
	const result = ref()
	effect(() => {
		result.value = fn()
	})
	return result
}
// 简单测试
let num1 = ref(10);
let num2 = ref(8);
let sum1 = computed(() => {
	return num1.value * num2.value;
})
let sum2 = computed(() => {
	return num1.value * 10
})

console.log(sum1.value);
console.log(sum2.value);

num1.value = 20

console.log(sum1.value);