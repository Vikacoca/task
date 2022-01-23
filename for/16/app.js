let arr = [];
let flag = true;
for (let i = 1; i <= 5; i++) {
    let num = +prompt("Введите число:");
    if (isNaN(num)) {
        console.log("Повторите ввод.");
        flag = false;
        break;

    } else arr.push(num);
}
if (flag == true) {
    for (let n = 0; n < arr.length; n++) {
        console.log(arr[n] * 2);
    }
}
