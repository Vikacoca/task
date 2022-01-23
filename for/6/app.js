let m = +prompt("Введите первое число:");
let n = +prompt("Введите второе число:");
let flag = true;
if (isNaN(m) || isNaN(n)) {
    console.log("Некорректное число/числа");
} else if (m > n) {
    console.log("m > n");
} else {
    for (; m <= n; m++) {
        if (m.toString().endsWith("9")) {
            flag = false;
        }
        if (m % 17 == 0 || (m % 3 == 0 && m % 5 == 0) || flag == false) {
            console.log(m);
            flag = true;
        }
    }
}   