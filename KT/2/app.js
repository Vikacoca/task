let a = +prompt("Введите первое число:");
let b = +prompt("Введите второе число:");
if (!(isNaN(a) || isNaN(b))) {
    console.log("Квадрат суммы " + a + " и " + b + " равен:", Math.pow((a + b), 2));
    console.log("Сумма квадратов " + a + " и " + b + " равна:", Math.pow(a, 2) + Math.pow(b, 2));
} else console.log("Некорректно введённое число/числа.");