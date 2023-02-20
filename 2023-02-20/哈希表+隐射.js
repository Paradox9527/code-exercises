// 哈希表有一个常见的功能，建立映射关系。设计模式的策略模式，思路类似，映射表常常见于后端的枚举类型。
// 后端只会返回0，1，2
const type = {
	2: 'orange',
	1: 'red',
	0: 'blue'
}

// 前端会这样用
type[后端返回的数字]

// 1.两数之和 就可以用哈希表的方法
var twoSum = function (nums, target) {
	let map = new Map();
	for(let i = 0; i < nums.length; i++) {
		if (map.get(nums[i]) !== undefined) {
			return [map.get(nums[i]), i]
		} else {
			map.set(target - nums[i], i)
		}
	}
}

// 2.两数组之和
// 给定两个数组，求他们的交集
// 例：nums1 = [1, 2, 2, 1], nums2 = [2, 2] 
// 输出：[2]

// 用set与filter能一行解决，但是空间复杂度 时间复杂度比较高
// var interSection = function (nums1, nums2) {
// 	return [...new Set(nums1)].filter((item) => {
// 		new Set(nums2).has(item);
// 	})
// }

// 另一种，用map去存nums1数组里的每一项，类似map[nums[i]] = true;
// 然后遍历num2,如果在map中已经有的值，类似map[nums2[i]],就把它push到一个数组里
// 并且将map[nums2[i]]设为false，后面有相同的值就不push到数组中了
var interSection = function (nums1, nums2) {
	const map = {};
	const ret = [];
	for (let i = 0; i < nums1.length; i++) {
		map[nums1[i]] = true;
	}
	for (let i = 0; i < nums2.length; i++) {
		if (map[nums2[i]]) {
			ret.push(nums2[i]);
			map[nums2[i]] = false;
		}
	}
	return ret
}