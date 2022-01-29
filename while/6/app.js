let N = +prompt("Введите число:");
let i = 0;
if (!(isNaN(N) || N < 10)) {
    let max = N.toString().charAt(0);
    let min = N.toString().charAt(0);
    while (i < N.toString().length) {
        if (N.toString().charAt(i) > max) {
            max = N.toString().charAt(i);
        }
        if (N.toString().charAt(i) < min) {
            min = N.toString().charAt(i);
        }
        i++;
    }
    console.log("Max:", max);
    console.log("Min:", min);
} else console.log("Некорректное число");