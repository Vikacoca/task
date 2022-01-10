let number1 = +prompt("Enter the number:");
ch1 = Math.floor(number1 / 100);
ch2 = Math.floor((number1 - ch1 * 100) / 10);
ch3 = number1 - ch1 * 100 - ch2 * 10;
console.log(ch1 + ch2 + ch3);