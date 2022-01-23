let res = 1;
let flag = true;
for (let i = 1; i <= 10; i++) {
    let num = +prompt("Введите число:");
    if (num != 0) {
        res = res * num;
        flag = false;
    }
}
if (flag == false) {
    console.log(res);
} else console.log("Все элементы = 0");