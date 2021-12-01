let str1 = prompt("Enter the first string:");
let str2 = prompt("Enter the second string:");
str1 = str1.trim();
str2 = str2.trim();
console.log("First string:", str1);
console.log("Second string:", str2);
let str3 = str1.toLowerCase();
let str4 = str2.toLowerCase();
let a = str3.lastIndexOf(str4);
let b = str4.length;
let str5 = str3.substr(a, b);
let c = a + b;

if (str4 == str5) {
    let str6 = str1.slice(c);
    str6 = str6.trim();
    console.log(str6);
}
else if ((a == -1) || (str1 == "") || (str2 == "")) {
    console.log("Повторений не было");
}
console.log("Позиция:", a);