// 给你一个整数数组 arr，请你将该数组分隔为长度 最多 为 k 的一些（连续）子数组。分隔完成后，每个子数组的中的所有值都会变为该子数组中的最大值。

// 返回将数组分隔变换后能够得到的元素最大和。本题所用到的测试用例会确保答案是一个 32 位整数。

// 输入：arr = [1,15,7,9,2,5,10], k = 3  
// 输出：84
// 解释：数组变为 [15,15,15,9,10,10,10] 。 [1,15,7],[9],[2,5,10]


// 思路; 动态规划
// 一次只考虑一次分组，枚举到了i，将i作为这一组的末尾，然后在[i-k, i-1]这个范围了逆枚举j, 
var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;
    const d = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        let maxValue = arr[i - 1];
        for (let j = i - 1; j >= Math.max(0, i - k); j--) {
            d[i] = Math.max(d[i], d[j] + maxValue * (i - j));
            if (j > 0) {
                maxValue = Math.max(maxValue, arr[j - 1]);
            }
        }
    }
    return d[n];

}