let a = +prompt("Введите первое число первой клетки:");
let b = +prompt("Введите второе число первой клетки:");
let c = +prompt("Введите первое число второй клетки:");
let d = +prompt("Введите второе число второй клетки:");
if (!(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) ||
    (a < 1 || a > 8) || (b < 1 || b > 8) || (c < 1 || c > 8) || (d < 1 || d > 8))) {
    if (((a + b) % 2 == 0) && ((c + d)) % 2 == 0) {
        console.log("ДА");
    } else console.log("НЕТ");
} else console.log("Некорректно введённая клетка.");