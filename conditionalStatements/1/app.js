let value = prompt("Enter a value:");
let flag = true;
for (let i = 0; i < value.length; i++) {
    if (value.charAt(i).charCodeAt() > 47 && value.charAt(i).charCodeAt() < 58) {
        flag;
    }
    else {
        flag = false;
        break;
    }
}
if (flag) {
    console.log("Верно");
}
else console.log("Неверно");