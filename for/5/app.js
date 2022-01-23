let m = +prompt("Введите первое число:");
let n = +prompt("Введите второе число:");
if (isNaN(m) || isNaN(n)) {
    console.log("Некорректное число/числа")
} else if (m > n) {
    for (; m >= n; m--) {
        if (m % 2 == 1 || m % 2 == -1) console.log(m);
    }
} else console.log("m<n");