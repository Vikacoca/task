let arr = [];
let flag = true;
for (let i = 1; i <= 5; i++) {
    let num = +prompt("Введите число:");
    if (isNaN(num)) {
        console.log("Повторите ввод.");
        flag = false;
        break;

    } else if (num.toString().startsWith("1") || num.toString().startsWith("2") || num.toString().startsWith("5")) {
        arr.push(num);
    }
}
if (flag == true) {
    for (let n = 0; n < arr.length; n++) {
        console.log(arr[n]);
    }
}
if (arr.length == 0) {
    console.log("В массиве нет элементов, начинающихся на 1/2/5");
}
