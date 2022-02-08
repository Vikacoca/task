let n = +prompt("Введите высоту звёздной рамки:");
let str = "*";
let str2 = "*                 *";
if (!(isNaN(n) || n < 3 || n > 19)) {
    console.log(str.repeat(19));
    for (let i = 1; i < n - 1; i++) {
        console.log(str2);
    }
    console.log(str.repeat(19));
} else console.log("Некорректная высота.");