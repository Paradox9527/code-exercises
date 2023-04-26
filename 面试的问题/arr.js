function a (input, buffer, offset) {
    buffer[offset++] = input + 1;
    buffer[offset++] = input + 2;
    return offset;
}

const arr = [];
a(123, arr, 0);
console.log(arr);

// [124, 125]

// js中数组复制操作创建浅拷贝