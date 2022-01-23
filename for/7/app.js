let a = +prompt("Введите первое число:");
let b = +prompt("Введите второе число:");
let counter = 0;
if (isNaN(a) || isNaN(b)) {
    console.log("Некорректное число/числа");
} else if (a > b) {
    console.log("a>b");
} else {
    for (; a <= b; a++) {
        if ((Math.pow(a, 3)).toString().endsWith("4") || (Math.pow(a, 3)).toString().endsWith("9")) {
            counter++;
        }
    }
    if (counter != 0) {
        console.log(counter);
    } else console.log("Нет таких чисел.");
}