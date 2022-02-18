let obj = {
};
let N = +prompt("Введите число:");
if (isNaN(N) || N < 1) {
    flag = false;
} else flag = true;
while (flag == false) {
    N = +prompt("Некорректное число, попробуйте ещё раз:");
    if (isNaN(N) || N < 1) {
        flag = false;
    } else flag = true;
}
let arr = [];
for (let i = 1; i <= N; i++) {
    arr[i - 1] = Math.ceil(Math.random() * 11);
    obj[i] = arr[i - 1];
}
console.log(obj);