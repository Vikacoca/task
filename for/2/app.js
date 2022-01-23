let n = +prompt("Введите число");
if (isNaN(n) || n < 0) {
    console.log("Некорректное число/Число меньше 0")
} else {
    for (let i = 0; i <= n; i++) {
        console.log("Квадрат числа " + i + " равен " + Math.pow(i, 2));
    }
}