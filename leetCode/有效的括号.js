// 1.有效的括号  堆栈的概念基础题
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

// 例子：输入：s="()" 输出：true
// 输入：s="(}" 输出：false

var isValid = function (s) {
	if (s.length === 1) { // 要一一对应，则长度一定是偶数
		return false;
	}
	const map = new Map([
		[')', '('],
		['}', '{'],
		[']', '['],
	])
	let ch = [];
	for (let val of s) {
		if (map.has(val)) {
			if (!ch.length || ch[ch.length - 1] !== map.get(val)) {
				return false;
			}
			ch.pop()
		} else {
			ch.push(val);
		}
	}
	return !ch.length;
}