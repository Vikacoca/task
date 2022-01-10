let number1 = +prompt("Enter the first number");
let number2 = +prompt("Enter the second number");
let operation = prompt("Enter the operation");
let flag = true;
let result = (operation == "/") ? number1 / number2 : (operation == "+") ?
    number1 + number2 : (operation == "-") ? number1 - number2 : (operation == "*") ?
        number1 * number2 : "Incorrect operation";
if (operation == "/" && number2 == 0) {
    console.log("На 0 делить нельзя");
    flag = false;
}
if (flag) {
    console.log(result);
}