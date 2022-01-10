let nm1 = +prompt("Enter the 1st value");
let nm2 = +prompt("Enter the 2nd value");
let nm3 = +prompt("Enter the 3rd value");
flag = true;
if (nm1 < 1 || nm2 < 1 || nm3 < 1) {
    flag = false;
}
while (flag) {
    if (nm1 == nm2 && nm2 == nm3) {
        console.log("Равносторонний");
    }
    if (nm1 != nm2 && nm1 != nm3 && nm2 != nm3) {
        console.log("Разносторонний");
    }
    if ((nm1 == nm2 && nm1 != nm3) || (nm1 == nm3 && nm1 != nm2) || (nm2 == nm3 && nm2 != nm1)) {
        console.log("Равнобедренный");
    }
    break;
}
if (flag == false) {
    console.log("Incorrect value");
}