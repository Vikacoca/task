let F = prompt("Enter the temperature:").trim();

/* Проверка на ввод температуры */
let flag = true;
for (let i = 0; i < F.length; i++) {
    let l = F.charAt(i);
    if ((l.charCodeAt() > 47 && l.charCodeAt() < 58) || l.charCodeAt() == 46 || l.charCodeAt() == 45) {
        flag = true;
    }
    else {
        flag = false;
        break;
    }
}
if (flag == true) {
    console.log("The temperature F is:", +F);
}
else console.log("Incorrect F temperature");

/* Температура по C */
if (flag) {
    let C = (5 / 9 * (+F - 32));
    console.log("The temperature C is:", +C);
}
else console.log("Incorrect C temperature");