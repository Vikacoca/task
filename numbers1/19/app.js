let number1 = +prompt("Enter the number:");
ch1 = Math.floor(number1 / 1000);
ch2 = Math.floor((number1 - ch1 * 1000) / 100);
ch3 = Math.floor((number1 - ch1 * 1000 - ch2 * 100) / 10);
ch4 = number1 - ch1 * 1000 - ch2 * 100 - ch3 * 10;
console.log("Цифра в позиции тысяч:", ch1);
console.log("Цифра в позиции сотен:", ch2);
console.log("Цифра в позиции десятков:", ch3);
console.log("Цифра в позиции единиц:", ch4);