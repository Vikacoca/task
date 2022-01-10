let value = prompt("Enter a value");
let flag = true;
for (let i = 0; i < value.length; i++) {
    if (value.charAt(i).charCodeAt() > 47 && value.charAt(i).charCodeAt() < 58 || value.charAt(i).charCodeAt() == 45) {
        flag;
    }
    else {
        flag = false;
        break;
    }
}
if (flag) {
    value = +value;
    if (value % 3 == 0) {
        console.log("Это число и остаток от деления на 3 = 0");
    }
    else console.log("Это число, но остаток от деления на 3 не = 0");
}
else console.log("Это не число");