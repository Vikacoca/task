let N = +prompt("Введите число:");
let i = 2;
if (!(isNaN(N) || N < 1)) {
    while (N % i != 0) {
        i++;
    }
    console.log(i);
} else console.log("Некорректное число");