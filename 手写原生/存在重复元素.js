// 类似的重复元素类的题型

// 1.给定一个整数数组，判断是否存在重复元素 题号
// 如果存在一值在数组中出现两次，函数返回true。都不相同就返回false

// 思路：遍历数组，依次存数据，存之前判断创建的有没有，有就return true 就的出来了
const containsDuplicate = function (nums) {
	let map = new Map()
	for (let i of nums) {
		if (map.has(i)) {
			return true;
		} else {
			map.set(i, 1);
		}
	}
	return false;
}

// 2.字符串中的第一个唯一字符  题号387
// 给定一个字符串，找出它第一个不重复的字符，并返回它的索引。如果不存在，则返回-1

const s = 'loveleetcode'
// 思路：遍历两次，第一次遍历，记录字符串字符出现的次数。第二次遍历，遍历到一个只出现一次的字符，就返回它的索引。否则在遍历结束后返回-1
const firstUniqChar = function (s) {
	const position = new Map()
	const n = s.length;
	for (const [i, ch] of Array.from(s).entries()) {
		console.log([i,ch]);
		if (position.has(ch)) {
			position.set(ch, -1)
		} else {
			position.set(ch, i)
		}
	}
	console.log(position);
	let first = n;
	for (let pos of position.values()) {
		if (pos != -1 && pos < first) {
			first = pos;
		}
	}
	if (first === n) {
		first = -1
	}
	return first
}

// firstUniqChar(s)


// 3.有效的字母异位词 例如：anagram与nagaram 是true；car与rat就是false  题号242
// 两个字符串s和t，用一个函数判断t是否是s得字母异位词

const a = 'anagram';
const b = 'nagaram';

const isAnagram = function (s, t) {
	return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
}

// isAnagram(a, b)

// 4.多数元素 题号169
// 给定一个大小为n的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于n/2的元素。
// 示例：[3,2,3]
// 输出：3

// 思路：依旧是计数的，所以使用map，遍历字符串，开始记数。第一次出现，则map[第一次碰见的字母] = 1
// 如果map已经记录过了，则map[已经记录的字母] += 1
// 遍历的过程中，看map[记录过的字母]是否大于 数组总长度/2

let num = [3, 2, 3];
var majorityElement = function (nums) {
	let map = new Map();
	const n = nums.length / 2 // 右移运算符，意思是除以2
	// for (let i = 0; i < nums.length; i++) {
	// 	map[nums[i]] = map[nums[i]] !== undefined ? map[nums[i]] + 1 : 1
	// 	if (map[nums[i]] > n) {
	// 		return nums[i]
	// 	}
	// }
	for (let num of nums) {
		if (map.has(num)) {
			let currNum = map.get(num);
			map.set(num, currNum + 1)
		} else {
			map.set (num, 1);
		}
		if (map.get(num) > n) {
			return num
		}
	}
	
}
// console.log(majorityElement[num]);


// 5.只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次，找出那个只出现了一次的元素
// 示例：[2,2,1] 输出1

// 思路：用map记录一遍，遍历第一遍存次数，遍历map，看看那个次数是1就行了
const num1 = [3,3,1];
var singleNumber = function (nums) {
	// let map = new Map();
	// for (let num of nums) {
	// 	if(map.has(num)) {
	// 		let counter = map.get(num)
	// 		map.set(num, counter + 1);
	// 	} else {
	// 		map.set(num, 1);
	// 	}
	// }
	// for (let [num, counter] of map) {
	// 	if (counter === 1) {
	// 		return num
	// 	}
	// }

	// 但是该题目有限制，具有线性时间复杂度
	// 异或运算符（^）:
	// 1.任何数和自己做异或运算，结果为0， a^a = 0
	// 2.任何数和0做异或运算，结果还是自己，即 a^0 = a
	// 3.异或运算，满足运算交换律结合律， a^b^a = a^a^b = (a^a)^b = 0^b = b
	// 所以从第一个数开始做异或出现重复就是0了 0跟别的数异或就是它自己了
	let init = nums[0];
	for (let i = 1; i < nums.length; i++) {
		init ^= nums[i];
	}
	return init;
}

// console.log(singleNumber(num1));

// 6.位1的个数
// 输入一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为‘1’的个数（也称为汉明重量）
// 示例：00000000000000000000000000001011
// 输出：3
let n1 = 00000000000000000000000000001011
var hammingWeight = function (n){
	let ret = 0;
	// for (let i = 0; i < 32; i++) {
	// 	if ((n & (1 << i)) !== 0) {
	// 		ret++
	// 	}
	// }
	// return ret
	
	// 与运算
	while (n) {
		n &= (n - 1);
		ret++;
	}
	return ret
}