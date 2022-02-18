let flag = false;
let flag2 = false;
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
    obj[i] = prompt("Введите значение свойства " + i + " объекта:");
    if (obj[i] == "" || obj[i].includes(" ")) {
        flag2 = false;
    } else flag2 = true;
    while (flag2 == false) {
        obj[i] = prompt("Некорректное значение свойства " + i + " объекта. Попробуйте ещё раз:");
        if (obj[i] == "" || obj[i].includes(" ")) {
            flag2 = false;
        } else flag2 = true;
    }
}
/*
Как оставить только уникальные значения - я хз
*/
console.log(obj);