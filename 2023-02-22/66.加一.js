// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

let num = [1,2,3]
var plusOne = function(digits) { // 加1n  丢失精度问题
    return (BigInt(digits.join('')) + 1n).toString().split('');
};
console.log(plusOne(num));