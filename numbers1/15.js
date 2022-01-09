let number1 = +prompt("Enter the number of humans in the world:");
if (number1 % 2 == 1) {
    console.log(Math.ceil(number1 / 2));
}
else console.log(Math.floor(number1 / 2));