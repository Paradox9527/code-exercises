// 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
// 输入：a = "1010", b = "1011"
// 输出："10101"

// 思路:从后往前遍历，相加，是否要进一，相加完后反转需要，因为加出来的是倒过来的

var addBinary = function (a, b) {
	// let addOne = 0; // 是否要进1
	// let result = ""; // 结果
	// // 逆遍历
	// for (let i = a.length - 1, j = b.length - 1; i >=0 || j >= 0; i--,j--) {
	// 	let sum = addOne;
	// 	sum += i >= 0 ? parseInt(a[i]) : 0;
	// 	sum += j >= 0 ? parseInt(b[j]) : 0;
	// 	result += sum % 2; // 如果01 + 01， 上面的就是 1 + 1， sum是2，所以是要进1的这边用取余就是，结果要么是0，要么是1；2%2 = 0 1%2 = 1；
	// 	addOne = Math.floor(sum / 2); // 去掉小数点部分就是
	// }
	// result += addOne === 1 ? addOne : ''; // 判断最后一次计算后是否还有进1
	// return result.split('').reverse().join('')


	return ((BigInt('0b' + a) + BigInt('0b' + b)).toString(2))
}

console.log(addBinary("11", "1"));