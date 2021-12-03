const str = prompt("Enter 'я учу javascript!':"); // если переменную не перезаписываем, то объявляем как const
// let a = str.length; // если переменную используем лишь один раз, то нет смысла ее объявлять. Просто ниже используем как str.length. просто для чистоты кода
const b = str.indexOf("учу");
const c = str.indexOf("javascript!");
const str2 = str.slice(b, b + 3);
const str3 = str.substring(c, c + 11);

console.log("Amount of symbols:", str.length);
console.log("Position of 'учу':", b);
console.log("String 1:", str2);
console.log("String 2:", str3);