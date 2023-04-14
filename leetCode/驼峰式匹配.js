// 如果我们可以将小写字母插入模式串 pattern 得到待查询项 query，那么待查询项与给定模式串匹配。（我们可以在任何位置插入每个字符，也可以插入 0 个字符。）

// 给定待查询列表 queries，和模式串 pattern，返回由布尔值组成的答案列表 answer。只有在待查项 queries[i] 与模式串 pattern 匹配时， answer[i] 才为 true，否则为 false。

// 输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
// 输出：[true,false,true,true,false]
// 示例：
// "FooBar" 可以这样生成："F" + "oo" + "B" + "ar"。
// "FootBall" 可以这样生成："F" + "oot" + "B" + "all".
// "FrameBuffer" 可以这样生成："F" + "rame" + "B" + "uffer".



const camelMatch = function (queries, pattern) {
    let length = queries.length;
    let res = new Array(length);
    for (let i = 0; i < length; i++) {
        res[i] = true;// 默认是匹配的
        let p = 0; // 用于遍历pattern
        for (let j = 0; j < queries[i].length; j++) {
            let c = queries[i][j];// 遍历要匹配的那个字符串
            if (p < pattern.length && pattern[p] === c) { // 匹配到大写字母符合了，
                p++
            } else if (c.toUpperCase() === c) { // 本身的字符就是个大写字母且不符合pattern
                res[i] = false;
                break;
            }
        }
        if (p < pattern.length) { // 如果是符合pattern的话，遍历得到的p一定等于pattern的长度
            res[i] = false;
        }
    }
    return res
}