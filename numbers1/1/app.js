let katet1 = prompt("Enter the first nubmer:").trim();
let katet2 = prompt("Enter the second nubmer:").trim();

/* Проверка на ввод первого числа */

let flag = true;
for (let i = 0; i < katet1.length; i++) {
    let l = katet1.charAt(i);
    if (l.charCodeAt() > 47 && l.charCodeAt() < 58 || l.charCodeAt() == 46) {
        flag = true;
    }
    else {
        flag = false;
        break;
    }
}
if (flag == true) {
    console.log("The first number:" + +katet1);
}
else console.log("Incorrect number #1");

/* Проверка на ввод второго числа */
flag2 = true;
for (let i = 0; i < katet2.length; i++) {
    let l = katet2.charAt(i);
    if ((l.charCodeAt() > 47 && l.charCodeAt() < 58) || l.charCodeAt() == 46) {
        flag2 = true;
    }
    else {
        flag2 = false;
        break;
    }
}
if (flag2 == true) {
    console.log("The second nubmber:" + +katet2);
}
else console.log("Incorrect number #2");

/* Площадь */
if (flag == true && flag2 == true) {
    let square = (1 / 2 * +katet1 * +katet2).toFixed(2);
    console.log("The square is:", square);
}
else console.log("Incorrect square");