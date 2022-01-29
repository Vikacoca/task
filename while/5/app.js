let N = +prompt("Введите цену за услугу ведьмака:");
let counter = 0;
if (!(isNaN(N) || N < 1)) {
    while (N - 25 >= 0) {
        counter++;
        N = N - 25;
    }
    while (N - 10 >= 0) {
        counter++;
        N = N - 10;
    }
    while (N - 5 >= 0) {
        counter++;
        N = N - 5;
    }
    while (N - 1 >= 0) {
        counter++;
        N = N - 1;
    }
    console.log(counter);
} else console.log("Некорректная стоимость");