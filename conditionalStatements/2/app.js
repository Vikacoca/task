let number = +prompt("Enter a number");
let result = (number >= 0 && number <= 15) ? "В первой" : (number >= 16 && number <= 30) ? "Во второй" :
    (number >= 31 && number <= 45) ? "В третьей" : (number >= 46 && number <= 59) ? "В четвёртой" : "Число > 59";
console.log(result);