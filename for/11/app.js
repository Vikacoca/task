let n = +prompt("Введите число:");
let arr = [];
let arr2 = [];
if (!(n < 2 || isNaN(n))) {
    let max = +prompt("Введите следующее число:");
    arr.push(max);
    for (let i = 1; i < n; i++) {
        let num = +prompt("Введите следующее число:");
        arr.push(num);
        if (num > max) {
            max = num;
        } else continue;
    }
    console.log(max);
    for (let l = 0; l < arr.length; l++) {
        if (arr[l] != max) {
            arr2.push(arr[l]);
        }
    }
    let max2 = arr2[0];
    for (let m = 0; m < arr2.length; m++) {
        if (arr2[m] > max2) {
            max2 = arr2[m];
        } else continue;
    }
    console.log(max2);
} else console.log("n<2 / Некорректное число");

