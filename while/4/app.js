let N = +prompt("Введите кол-во чисел:");
let arr = [];
let j = 0;
let num;
let condition = 1;
let counter = 0;
if (!(isNaN(N) || N < 1)) {
    while (condition <= N) {
        num = +prompt("Введите число:");
        arr.push(num);
        condition++;
    }
    while (j < arr.length) {
        if (arr[j] > 5 || arr[j] < 1) break;
        if (arr[j] == 5) counter++;
        j++;
    }
    console.log(counter);
} else console.log("Некорректное кол-во чисел");