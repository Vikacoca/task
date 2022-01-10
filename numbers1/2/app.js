let distance = prompt("Enter the distance:").trim();
let speed1 = prompt("Enter the first speed:").trim();
let speed2 = prompt("Enter the second speed:").trim();

/* Проверка на ввод пути */

let flag = true;
for (let i = 0; i < distance.length; i++) {
    let l = distance.charAt(i);
    if ((l.charCodeAt() > 47 && l.charCodeAt() < 58) || l.charCodeAt() == 46) {
        flag = true;
    }
    else {
        flag = false;
        break;
    }
}
if (flag == true && distance) {
    console.log("The distance is:" + +distance + " km");
}
else console.log("Incorrect distance");

/* Проверка на ввод скорости первой бабули */

let flag2 = true;
for (let i = 0; i < speed1.length; i++) {
    let l = speed1.charAt(i);
    if (l.charCodeAt() > 47 && l.charCodeAt() < 58 || l.charCodeAt() == 46) {
        flag2 = true;
    }
    else {
        flag2 = false;
        break;
    }
}
if (flag2 == true) {
    console.log("The first speed is:" + +speed1 + " km/h");
}
else console.log("Incorrect speed #1");

/* Проверка на ввод скорости второй бабули */

let flag3 = true;
for (let i = 0; i < speed2.length; i++) {
    let l = speed2.charAt(i);
    if (l.charCodeAt() > 47 && l.charCodeAt() < 58 || l.charCodeAt() == 46) {
        flag3 = true;
    }
    else {
        flag3 = false;
        break;
    }
}
if (flag3 == true) {
    console.log("The second speed is:" + +speed2 + " km/h");
}
else console.log("Incorrect speed #2");

/* Подсчёт времени */

if (flag == true && flag2 == true && flag3 == true) {
    let generalspeed = +speed1 + +speed2;
    let time = (+distance / +generalspeed).toFixed(2);
    console.log("Time:", time + " hour(s)");
}
else console.log("Incorrect time");