// 当我们有一个方法，要根据不同的条件来做处理比如以下
// 初级程序员会这么写
function getServe(status: number) {
    if (status === 0) {
        return "massage";
    } else if (status === 1) {
        return "SPA";
    } else if (status === 2) {
        return "dabaojian";
    }
}
const result = getServe(0);
console.log(`我要去${result}`);

// 中级程序员
const Status = {
    MASSAGE: 0,
    SPA: 1,
    DABAOJIAN: 2,
};

function getServe1(status: any) {
    if (status === Status.MASSAGE) { // 这样写也可以，写成数字也行
        return "massage";
    } else if (status === Status.SPA) {
        return "spa";
    } else if (status === Status.DABAOJIAN) {
        return "dabaojian";
    }
}

const result1 = getServe(Status.SPA);
console.log(`我要去${result1}`);

// 使用枚举 高级老大哥会这么写
enum StatusOne {
    MASSAGE,
    SPA,
    DABAOJIAN,
}

function getServeTwo(status: any) {
    if (status === StatusOne.MASSAGE) {
        return "massage";
    } else if (status === StatusOne.SPA) {
        return "spa"
    } else if (status === StatusOne.DABAOJIAN) {
        return "dabaojian"
    }
}

const result2 = getServeTwo(Status.SPA);
// 调用时，传入一个1 也是能够输出的
const result3 = getServeTwo(1);
console.log(StatusOne.MASSAGE); // 0
console.log(StatusOne.SPA); // 1
console.log(StatusOne.DABAOJIAN);// 2

// 如果不想要让他从0开始，我可以这样去声明
// enum Status {
//     MASSAGE = 1,
//     SPA,
//     DABAOJIAN,
// }
console.log(`我要去${result2}`);

// 枚举可以通过下标反查
console.log(StatusOne.MASSAGE, StatusOne[1]); //  1, MASSAGE