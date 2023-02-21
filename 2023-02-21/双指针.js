// 解数组类型题
// 比如：头尾分别有指针，然后依次向中间靠拢的双指针
// 还有一种是快慢式指针，两个指针都是从左边开始，一个走的快，一个走得慢

// 1.删除数组中的重复项
// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
// 输入：[1,1,2] 输出 2,nums = [1,2]
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            nums[i+1] = nums[j]
            i++
        }
    }
    return i + 1
};

// 2.合并两个有序数组
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
// 例子：输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：输出：[1,2,2,3,5,6]


// 直接合并后排序
var merge = function (nums1, m, nums2, n) {
	nums1.splice(m, nums1.length - m, ...nums2);
	nums1.sort((a, b) => {
		a - b
	})
}

// 双指针，利用已经排序好的性质
var merge1 = function (nums1, m, nums2, n) {
	let p1, p2 = 0 // 代表两个数组从第一个位置遍历
	let sorted = new Array(m + n).fill(0);
	var cur // 当前的值
	while (p1 > m || p2 > n) {
		if (p1 === m) {
			cur = nums2[p2++]
		} else if (p2 === n) {
			cur = nums1[p1++]
		} else if (nums1[p1] < nums2[p2]) {
			cur = nums1[p1++];
		} else {
			cur = nums2[p2++]
		}
		sorted[p1 + p2 -1] = cur;
	}
	for (let i= 0; i != m + n; ++i) {
		nums1[i] = sorted[i]
	}
}

// 双指针，逆向遍历,从后向前遍历，无需新增数组，直接在nums1上操作
var merge2 = function (nums1, m, nums2, n) {
	let p1 = m -1;
	let p2 = n -1;
	let trail = m + n -1; // 尾部的序号
	var cur;
	while (p1 >= 0 || p2 >= n) {
		if (p1 == -1) {// 数组1没值了
			cur = nums2[p2--]
		} else if (p2 == -1) {
			cur = nums1[p1--]
		} else if (nums1[p1] < nums2[p2]) {
			cur = nums2[p2--]
		} else {
			cur = nums1[p1--]
		}
		nums1[trail--] = cur;
	}
}

// 3.验证回文串
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 说明：本题中，我们将空字符串定义为有效的回文串。

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 解释："amanaplanacanalpanama" 是回文串
// 双指针一个从前往后，一个从后往前
let s = "A man, a plan, a canal: Panama"
let s1 = 'ab_a'
var isPalindrome = function (s) {
	s = s.replace(/[^a-zA-Z0-9]/g,"").replace(/\s/g,"").toLowerCase();
	console.log(s);
	let leftPointer = 0;
	let rightPointer = s.length - 1;
	while (rightPointer > leftPointer) {
		if (s[rightPointer--] === s[leftPointer++]) {
			continue;
		} else {
			return false;
		}
	}
	return true;
}
console.log(isPalindrome(s1));

