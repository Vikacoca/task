let nm1 = +prompt("Enter the 1st nubmer");
let nm2 = +prompt("Enter the 2nd nubmer");
let nm3 = +prompt("Enter the 3rd nubmer");
let flag = true;
while (flag) {
    if (nm1 < nm2 + nm3) {
        flag;
    }
    else flag = false;
    if (nm2 < nm1 + nm3) {
        flag;
    }
    else flag = false;
    if (nm3 < nm1 + nm2) {
        flag;
    }
    else flag = false;
    break;
}
if (flag) {
    console.log("Существует");
}
else console.log("Не существует");