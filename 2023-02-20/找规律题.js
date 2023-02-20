// 找规律题，需要画个图或者要分析一下就能得出答案

// 1.给定一个罗马数字，将其转换成整数。输入范围在1-3999的范围
// 输入"III",输出3；输入“IV”输出4

// I: 1,
// V: 5,
// IV: 4,
// IX: 9,
// X: 10,
// XL: 40,
// XC: 90,
// L: 50,
// C: 100,
// CD: 400,
// CM: 900,
// D: 500,
// M: 1000,

// 思路：遍历s，把对应的map加一下就行了。有时会出现两个符号的，所以字符串截取的时候判断一下，如果直接有两位的话就要走那层，否则就是别的

var romanToInt  = function (s) {
	const map = {
		I: 1,
		V: 5,
		IV: 4,
		IX: 9,
		X: 10,
		XL: 40,
		XC: 90,
		L: 50,
		C: 100,
		CD: 400,
		CM: 900,
		D: 500,
		M: 1000,
	}
	let res = 0;
	let index = 0;
	let len = s.length;
	while (index < len) {
		if (index + 1 < len && map[s.slice(index, index + 2)]) { // 是否长度超过了；是否有两个字符一起的，比如开头就是IV或者XL这种
			res += map[s.slice(index, index+2)];
			index += 2;// 往后追加两个
		} else {
			res += map[s.slice(index, index + 1)];
			index += 1;
		}
	}
	return res
}

// 2.最长公共前缀 题号14
// 例如：查找字符串数组中的最长公共前缀，如果不存在公共前缀
// 输入：strs = ["flower", "flow", "flight"] 输出“fl”

// 思路：假设求数组里3个元素的最长公共前缀；
// 1.先前两个比较，求出他们两个的最长公共前缀
// 2.将上面的结果去跟第三个元素求最长公共前缀
// 3.n个元素就一直这么reduce下去

// 求两个字符串相同的部分的方法
var getSameStr = function (a, b) {
	let res = '';
	for (let j = 0; j < a.length; j++) {
		if (a[j] === b[j]) {
			res += a[j];
		} else {
			return res
		}
	}
	return res;
}

var longestCommonPrefix = function (strs) {
	if (strs.length === 0) {
		return ''
	}
	if (strs.length === 1) {
		return strs[0]
	}
	return strs.reduce(getSameStr, strs[0])
}

// 3.合并两个有序列表
// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的
// 输入：l1= [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

// 链表定义函数
function ListNode (val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (l1, l2) {
	// const dummpy = node = new ListNode();
	// while(l1 && l2) {
	// 	if (l1.val >= l2.val) {
	// 		node.next = l2;
	// 		node = node.next;
	// 		l2 = l2.next;
	// 	} else {
	// 		node.next = l1;
	// 		node = node.next;
	// 		l1 = l1.next;
	// 	}
	// }
	// node.next = l1 || l2;
	// return dummpy.next;

	// 递归
	if (l1 === null) {
		return l2;
	} else if (l2 === null) {
		return l1;
	} else if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2)
		return l1;
	} else {
		l2.next = mergeTwoLists(l1, l2.next)
		return l2
	}
}

// 实现str()函数 题号28
// 例如：给两个字符串haystack和needle。在前一个中找出第二个字符串出现的第一个位置。下标从0开始，不存在则返回-1
// 输入：haystack = "hello" needle = "ll"  输出：2

// 1.暴力遍历
var strStr = function (haystack, needle) {
	const n = haystack.length, m = needle.length;
	for (let i = 0; i + m < n; i++) {
		let flag = true;
		for (let j = 0; j < m; j++) {
			if (haystack[i + j] != needle[j]) {
				flag = false;
				break;
			}
		}
		if (flag) {
			return i
		}
	}
	return -1

}

// 2.另一种思路：遍历字符串是否有和需要找的字符串第一个字母相同
// 如果相同，就截取字符串跟需要找的字符串相同长度的字符串对比
// 相同就返回下标，不同就继续遍历原字符串
var str = function (haystack, needle) {
	if (needle === '') return 0
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === needle[0]) {
			if (haystack.substring(i, i + needle.length) === needle){
				return i
			}
		}
	}
	return -1
}

// 3.杨辉三角
// 给定一个非负整数numRows，生成杨辉三角的前numRows行
// 杨辉三角：每个数是它左上方和右上方的数的和
// 例子：输入5
// 输出：[
	//   [1],
	//  [1,1],
	// [1,2,1],
	//[1,3,3,1],
   //[1,4,6,4,1]
// ]

// 思路:1.杨辉三角有numRows行，数组就有numRows行
// 每一行，它的数组第一个位置和最后一个位置都是1
// 每一行，除了第一个和最后一个位置，其他位置的值等于上一行的两个值相加
var generate = function (numRows) {
	const ret = []

	for (let i = 0; i < numRows; i++) {
		const row = new Array(i+1).fill(1);
		for (let j = 1; j < row.length - 1; j++) {
			row[j] = ret[i - 1][j - 1] + ret[i-1][j]
		}
		ret.push(row);
	}
	return ret
}

console.log(generate(5));