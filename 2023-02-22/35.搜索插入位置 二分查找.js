// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。
// 输入: nums = [1,3,5,6], target = 5
// 输出: 2

var searchInsert = function (nums, target) {
	const len = nums.length;
	let left = 0, right = len - 1;
	let mid = 0
	// 二分查找
	while (left <= right) {
		mid = ((right - left) >> 1) + left; // 右移就是除2，求中间的位置
		if (nums[mid] >= target) {
			right = mid - 1
		} else {
			left = mid + 1;
		}
	}
	return left
}