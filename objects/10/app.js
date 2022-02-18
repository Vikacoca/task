let flag = false;
let flag2 = false;
let flag3 = false;
let obj = {
};
let N = +prompt("Введите число:");
if (isNaN(N) || N < 1) {
    flag = false;
} else flag = true;
while (flag == false) {
    N = +prompt("Некорректное число, попробуйте ещё раз:");
    if (isNaN(N) || N < 1) {
        flag = false;
    } else flag = true;
}
for (let i = 1; i <= N; i++) {
    obj[i] = prompt("Введите название города:");
    if (obj[i] == "" || obj[i].includes(" ")) {
        flag2 = false;
    } else flag2 = true;
    while (flag2 == false) {
        obj[i] = prompt("Некорректное название города. Попробуйте ещё раз:");
        if (obj[i] == "" || obj[i].includes(" ")) {
            flag2 = false;
        } else flag2 = true;
    }
}
for (let key in obj) {
    if (obj[key] == "Минск" || obj[key] == "Minsk") {
        flag3 = true;
        console.log(flag3 + ". Город Минск/Minsk входит в объект obj");
        break;
    } else flag3 = false
}
console.log(obj);