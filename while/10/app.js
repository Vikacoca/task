let N = +prompt("Введите число:");
let i = 1;
if (!(isNaN(N) || N < 1)) {
    while (i <= N) {
        if ((i > 4 && i < 10) || (i > 16 && i < 38) || (i > 77 && i < 88)) {
        } else console.log(i);
        i++
    }
} else console.log("Некорректное число");