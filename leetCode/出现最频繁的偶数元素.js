// 给你一个整数数组 nums ，返回出现最频繁的偶数元素。

// 如果存在多个满足条件的元素，只需要返回 最小 的一个。如果不存在这样的元素，返回 -1 。

// 输入：nums = [0,1,2,2,4,4,1]
// 输出：2
// 解释：
// 数组中的偶数元素为 0、2 和 4 ，在这些元素中，2 和 4 出现次数最多。
// 返回最小的那个，即返回 2 。

const mostFrequentEven = function (nums) {
    let count = new Map();
    for (let x of nums) {
        if (x % 2 == 0) {// 是偶数
            count.set(x, (count.get(x) || 0) + 1);
        }
    }
    let res = -1, ct = 0;
    for (let [k, v] of count) {
        if (res == -1 || v > ct || v == ct && k < res) {
            ct = v;
            res = k;
        }
    }
    return res
}

const arrNums = [0, 1, 2, 2, 4, 4, 1];
console.log(mostFrequentEven(arrNums));