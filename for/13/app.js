let n = +prompt("Введите число:");
let arr = [1, 1];
let str = "";
if (!(n > 99 || isNaN(n))) {
    arr.length = arr.length + n;
    for (let i = 0; i < arr.length - 2; i++) {
        arr[i + 2] = arr[i] + arr[i + 1];
        str = str + arr[i] + ", ";
    }
    str = str.substring(0, str.length - 2);
    console.log(str);
} else console.log("n>99");