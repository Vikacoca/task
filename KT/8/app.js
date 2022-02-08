let N = +prompt("Введите число, состоящее из минимум 3 цифр.");
if (!(isNaN(N) || N < 99)) {
    console.log(N.toString().charAt(2));
} else console.log("Некорректное число/число состоит не из 3 и более цифр.");