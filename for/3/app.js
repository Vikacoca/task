let n = +prompt("Введите число:");
let str = "*";
if (isNaN(n) || n < 2) {
    console.log("Некорректное число/Число < 2");
} else {
    for (let i = 1; i <= n; i++) {
        str = str + "*";
    }
    for (j = n; j >= 1; j--) {
        str = str.slice(1);
        console.log(str);
    }
}