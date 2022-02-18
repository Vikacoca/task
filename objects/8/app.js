let flag = false;
let obj = {
};
let a = +prompt("Введите количество элементов массива:");
if (isNaN(a) || a < 1) {
    flag = false;
} else flag = true;
while (flag == false) {
    a = +prompt("Некорректное число, попробуйте ещё раз:");
    if (isNaN(a) || a < 1) {
        flag = false;
    } else flag = true;
}
let arr = [];
let sum = 0;
for (let i = 0; i < a; i++) {
    arr[i] = +prompt("Введите элемент массива:");
    if (isNaN(arr[i]) || arr[i] == "" || arr[i].toString().includes(" ")) {
        flag = false;
    } else flag = true;
    while (flag == false) {
        arr[i] = +prompt("Некорректное число, попробуйте ещё раз:");
        if (isNaN(arr[i]) || arr[i] == "" || arr[i].toString().includes(" ")) {
            flag = false;
        } else flag = true;
    }
    sum = sum + arr[i];
}
console.log("Массив:", arr);
let average = sum / arr.length;
obj.avg = average;
console.log(obj);