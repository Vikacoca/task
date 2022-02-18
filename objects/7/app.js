let flag = false;
let obj = {
};
let a = prompt("Введите первое число:");
if (isNaN(+a) || a == "") {
    flag = false;
} else flag = true;
while (flag == false) {
    a = prompt("Некорректное число, попробуйте ещё раз:");
    if (isNaN(+a) || a == "") {
        flag = false;
    } else flag = true;
}
let b = prompt("Введите второе число:");
if (isNaN(+b) || b == "" || b.includes(" ")) {
    flag = false;
} else flag = true;
while (flag == false) {
    b = prompt("Некорректное число, попробуйте ещё раз:");
    if (isNaN(+b) || b == "" || b.includes(" ")) {
        flag = false;
    } else flag = true;
}
obj.avg = (+a + +b) / 2;
console.log(obj);