// 类中使用泛型
// class SelectGirl {
//     constructor(private girls: string[]) { }
//     getGirl(index: number): string {
//         return this.girls[index];
//     }
// }

// const selectGirl = new SelectGirl(["大脚", "刘英", "晓红"]);
// console.log(selectGirl.getGirl(1));

// 直接传名字参数不太爽，想用数字代替
// class SelectGirl {
//     constructor(private girls: string[] | number[]) { }
//     getGirl(index: number): string | number{
//         return this.girls[index];
//     }
// }

// const selectGirl = new SelectGirl(["大脚", "刘英", "晓红"]);
// console.log(selectGirl.getGirl(1));

// 使用泛型
// class SelectGirl <T>{
//     constructor(private girls: T[]) { }
//     getGirl(index: number): T{
//         return this.girls[index];
//     }
// }

// const selectGirl = new SelectGirl<string>(["大脚", "刘英", "晓红"]);
// console.log(selectGirl.getGirl(1));

// 泛型中的继承 声明接口，让泛型来继承
// interface Girl {
//     name: string;
// }

// class SelectGirl<T extends Girl> {
//     constructor(private girls: T[]) { }
//     getGirl(index: number): string { // name是string类型所以这一块要是string
//         return this.girls[index].name;
//     }
// }

// const selectGirl = new SelectGirl([
//     { name: "大脚" },
//     { name: "刘英" },
//     { name: "晓红" },
// ]);
// console.log(selectGirl.getGirl(1));

// 泛型约束
class SelectGirl <T extends string | number>{
    constructor(private girls: T[]) { }
    getGirl(index: number): T{
        return this.girls[index];
    }
}

const selectGirl = new SelectGirl<string>(["大脚", "刘英", "晓红"]);
console.log(selectGirl.getGirl(1));