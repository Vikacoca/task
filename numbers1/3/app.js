let chislo = prompt("Enter the number:").trim();

/* Проверка на ввод числа */
let flag = true;
for (let i = 0; i < chislo.length; i++) {
    let l = chislo.charAt(i);
    if ((l.charCodeAt() > 47 && l.charCodeAt() < 58) || l.charCodeAt() == 46 || l.charCodeAt() == 45) {
        flag = true;
    }
    else {
        flag = false;
        break;
    }
}
if (flag == true) {
    console.log("The number is:", +chislo);
}
else console.log("Incorrect number");

/* Обратное число */
if (flag && chislo != 0) {
    let result = 1 / +chislo;
    console.log("The result is:", result);
}
else console.log("There is no inverse number");