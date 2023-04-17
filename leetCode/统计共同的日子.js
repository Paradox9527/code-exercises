// Alice 和 Bob 计划分别去罗马开会。

// 给你四个字符串 arriveAlice ，leaveAlice ，arriveBob 和 leaveBob 。Alice 会在日期 arriveAlice 到 leaveAlice 之间在城市里（日期为闭区间），
// 而 Bob 在日期 arriveBob 到 leaveBob 之间在城市里（日期为闭区间）。每个字符串都包含 5 个字符，格式为 "MM-DD" ，对应着一个日期的月和日。

// 请你返回 Alice和 Bob 同时在罗马的天数。

// 你可以假设所有日期都在 同一个 自然年，而且 不是 闰年。每个月份的天数分别为：[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] 。

// 例子：
// 输入：arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"
// 输出：3
// 解释：Alice 从 8 月 15 号到 8 月 18 号在罗马。Bob 从 8 月 16 号到 8 月 19 号在罗马，他们同时在罗马的日期为 8 月 16、17 和 18 号。所以答案为 3 。

// 思路
// 计算出两人到达和离开日在一年中的第几天。然后用两人离开日子的最小值减去到达日子的最大值（因为后到的日子是大的）

var calculateDayOfYear = function (day, prefixSum) { // 计算当前天是这一年中的第几天
    let month = parseInt(day.substring(0, 2));
    let date = parseInt(day.substring(3));
    return date + prefixSum[month - 1];
}

var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    let dateOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let prefixSum = [0];
    for (let i = 0; i < dateOfMonths.length; i++) { // 循环计算出这个月是第几天了
        prefixSum.push(prefixSum[i] + dateOfMonths[i]);
    }
    let arriveAliceDate = calculateDayOfYear(arriveAlice, prefixSum);
    let leaveAliceDate = calculateDayOfYear(leaveAlice, prefixSum);
    let arriveBobDate = calculateDayOfYear(arriveBob, prefixSum);
    let leaveBobDate = calculateDayOfYear(leaveBob, prefixSum);

    return Math.max(0, Math.min(leaveAliceDate, leaveBobDate) - Math.max(arriveAliceDate, arriveBobDate) + 1);
};

console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"));