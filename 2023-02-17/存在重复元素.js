// 类似的重复元素类的题型

// 1.给定一个整数数组，判断是否存在重复元素
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

// 2.字符串中的第一个唯一字符
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


// 3.有效的字母异位词 例如：anagram与nagaram 是true；car与rat就是false
// 两个字符串s和t，用一个函数判断t是否是s得字母异位词

const a = 'anagram';
const b = 'nagaram';

const isAnagram = function (s, t) {
	const sLen = s.length;
	const tLen = s.length;
	if (sLen !== tLen) {
		return;
	}
	const obj = {};
	for(let i = 0; i< sLen; i++) {
		const currentS = s[i];
		const currentT = t[i];
		obj[currentS] ? obj[currentS]++ : obj[currentS] =  1;
		obj[currentT] ? obj[currentT]-- : obj[currentT] = -1;
	}
	console.log(obj);
	return Object.values(obj).every(v => v === 0);
}

isAnagram(a, b)