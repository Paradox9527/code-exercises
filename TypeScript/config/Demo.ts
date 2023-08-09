// tsconfig.ts
// 如何生成配置文件，在根目录下使用终端tsc -init
// 编译一下，生成js代码 tsc Demo.ts  此时配置文件并没有起作用的 
// 直接用tsc  就会起效 但是多文件就不好做了
// 可以在tsconfig中使用include关键字 "include":["Demo.ts"]
// 与其所相反的时exclude不包括，跟include有点类似的是files

// "noImplicitAny": true, 允许你的注解类型any 不用特意标明 
// 当你的变量或者参数是any时，不注明也行
// "strictNullChecks": true,   不允许有null值得出现
// rootdir outdir  sourceMap 这些用的多
const person :string = 'jsli';