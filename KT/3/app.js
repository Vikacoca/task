let N = +prompt("Введите число:");
if (!(isNaN(N) || N < 1 || N > 9)) {
    console.log(N + +(N.toString() + N.toString()) + +(N.toString() + N.toString() + N.toString()));
} else console.log("Некорректное число.");