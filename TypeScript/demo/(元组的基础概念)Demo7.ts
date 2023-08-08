// TS的元组的使用
// 例子
// const xiaojiejie: (string | number)[] = ['dajiao', 'teacher', 28]
// 如果我数组顺序替换了,就不符合我的业务逻辑,名称 职业 年龄了

const xiaojiejie: [string, string, number] = ['dajiao', 'teacher', 28]
// 我这样写的话,顺序我调换了就报错了

// 数据源格式 CSV
// "dajiao", "teacher", 28;
// "liuying", "teacher", 18;
// "cuihua", "teacher", 25;
// 所以为了程序的严谨就要用元组 

const xiaojiejiess :[string, string, number][] = [
    ["dajiao", "teacher", 28],
    ["liuying", "teacher", 18],
    ["cuihua", "teacher", 25]
]
// 然而现在用的少了 现在都是对象了
