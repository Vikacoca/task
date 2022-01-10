let str = prompt("Enter a string:").trim().toLowerCase();
let result = (str == "ru") ? "Русский" : (str == "en") ? "Аннлийский" : "Неопознанный язык";
console.log(result);