let N = +prompt("Введите кол-во чисел:");
let arr = [];
let j = 0;
let num;
let condition = 1;
if (!(isNaN(N) || N < 1)) {
    while (condition <= N) {
        num = +prompt("Введите число:");
        arr.push(num);
        condition++;
    }
    while (j < arr.length) {
        if (arr[j] % 7 != 0) break;
        console.log(arr[j]);
        j++;
    }
} else console.log("Некорректное кол-во чисел");