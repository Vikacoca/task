let str = prompt("Enter 'я учу javascript!':");
let a = str.length;
let b = str.indexOf("учу");
let c = str.indexOf("javascript!");
let str2 = str.slice(b, b + 3);
let str3 = str.substring(c, c + 11);
console.log("Amount of symbols:", a);
console.log("Position of 'учу':", b);
console.log("String 1:", str2);
console.log("String 2:", str3);