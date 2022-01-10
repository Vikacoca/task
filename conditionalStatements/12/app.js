let age = +prompt("Enter your age:");
let result = (age <= 0) ? "Неверный возраст" : (age > 0 && age <= 13) ? "Детство" : (age >= 14 && age <= 24) ? "Молодость" :
    (age >= 25 && age <= 59) ? "Зрелость" : "Старость";
console.log(result);