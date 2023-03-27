//1. a == ('1' || '2' || '3') ? false : true 优化表达式

// a是否是等于1 或者2或者3的
// const array1 = ['1', '2', '3'];
// const a = '1'
// console.log(array1.includes(a + ''));

// ![1,2,3].includes(+a)
// or
// !['1', '2', '3'].includes(a + '')
// or
// !{1: true, 2: true, 3: true}[a]

// 2. 写一个方法，当给定数字位数不足8位时，则在左边补充0以补足8位数的方法
// const padNumber = function (number, targetLength, placeholder) {
//     let array = ('' + number).split('');
//     console.log(array);
//     let diff = array.length - targetLength;
//     console.log(diff);
//     if (diff < 0) {
//         return new Array(0 - diff).fill(placeholder, 0, 0 - diff + 1).concat(array).join('');
//     } else {
//         return array.join('');
//     }
// }
// console.log(padNumber(808, 8, 0));

// 3. 使用js生成1- 10000的数组
// const array = Array.from(new Array(10001).keys()).slice(1);
// // ​Array.from({length:10000},(node,i)=> i+1)​​
// console.log(array);

// 4. 分析`('b' + 'a' + + 'a' + 'a').toLowerCase()`返回的结果
// ('b') + ('a') + (+'a') + ('a')
// +'a'尝试使用一元运算符转换成数字，a不是数字，所以是NaN
// 'b'  +  'a'  +  NaN  + 'a'
// 'baNaNa'.toLowerCase()      =>  'banana'

// 5. 写一个方法把多维数组降维
// 8种方法
// 1.数组字符串化  只限array这种形式的数组，如果是[[12,22],[12],33, [12,22]] 这类的，[12,22]中的逗号也会字符串化
let array = [[1234], [12], 789, [123]];
let array1 = ['1', '2', ['2', ['6', ['4', '9'], '8'], '5'], '3', '3', '2']
// const stringFormat = function (arr) {
//     arr += '';
//     arr = arr.split('');
//     console.log(arr);
// }
// stringFormat(array)

// 2.使用contact
// const contactFormat = function (arr) {
//     var result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].constructor === Array) {
//            result = result.concat(arr[i]);
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result
// }
// console.log(contactFormat(array));

// 3. 扩展运算符
// 扩展运算符相当于数组拆成最小单位了，...[1,，2,，[3， 4]] 相当于变成了 1，2, [3, 4]；这样 [ ].concat(...a) 就相当于 [ ].concat(1，2，[3，4])
// const expentFormat = function (arr) {
//     let result = [].concat(...arr);
//     return result;
// }
// console.log(expentFormat(array));

// 4. 递归
// const demo = function (arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             // 是数组的，调用递归函数，然后再push到结果中
//             result.push.apply(result, demo(arr[i]))
//         } else {
//             // 不是数组直接push到数组中
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(demo(array1));

// 5. 利用apply
// 这个跟扩展运算符类似，apply 会把数组a 拆分，拆成 1,2，[3, 4] 依次传递给concat方法， 效果就跟 扩展运算符一样了。
// const applyFormat = function (arr) {
//     let result = [];
//     result = Array.prototype.concat.apply([], arr);
//     return result;
// }
// console.log(applyFormat(array));
// console.log(applyFormat(array1)); //  ['1', '2', '2', Array(3), '5', '3', '3', '2']

// 6. Array.prototype.flat()
// var arr1 = [1, 2, [3, 4]]
// console.log(arr1.flat())
// // [1, 2, 3, 4]
 
// var arr2 = [1, 2, [3, 4, [5, 6]]]
// console.log(arr2.flat())
// // [1, 2, 3, 4, [5, 6]]
 
// var arr3 = [1, 2, [3, 4, [5, 6]]]
// console.log(arr3.flat(2))
// // [1, 2, 3, 4, 5, 6]
// //使用 Infinity 作为深度，展开任意深度的嵌套数组
// console.log(arr3.flat(Infinity))

// 7. 使用stack无限反嵌套多层嵌套数组
// const flatten = function (input) {
//     const stack = [...input];
//     const res = [];
//     while (stack.length) {
//         // 使用pop从stack中取出并移除值
//         const next = stack.pop();
//         if (Array.isArray(next)) {// pop出来的是array 使用 push 送回内层数组中的元素，不会改动原始输入 original input
//             stack.push(...next);
//         } else {
//             res.push(next)
//         }
//     }
//     // 使用reverse 恢复原数组
//     return res.reverse();
// }
// console.log(flatten(array));
// console.log(flatten(array1));

// 8. 使用reduce、concat和递归无限反嵌套多层嵌套的数组
// const flatten = function (arr) {
//     return arr.reduce(
//         (acc, val) =>  Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
//         []
//     )
// }
// console.log(flatten(array));
// console.log(flatten(array1));