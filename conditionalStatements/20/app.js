let number1 = +prompt("Enter the first number");
let number2 = +prompt("Enter the second number");
let operation = prompt("Enter the operation");
let result = (operation == "/") ? number1 / number2 : (operation == "+") ?
    number1 + number2 : (operation == "-") ? number1 - number2 : (operation == "*") ?
        number1 * number2 : "Incorrect operation";
console.log(result);