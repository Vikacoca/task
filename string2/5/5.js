let str1 = prompt("Enter the first string:");
let str2 = prompt("Enter the second string:");
var str7 = "";
var str6 = "";
console.log("First string:", str1);
console.log("Second string:", str2);
let str3 = str1.toLowerCase();
let str4 = str2.toLowerCase();
let a = str3.lastIndexOf(str4);
let b = str4.length;
let c = a + b;
let str5 = str3.substr(a, b);
if (str4 == str5) {
    var str6 = str1.slice(c);
    str6 = str6.trim();
}
else if ((a == -1) || (str1 == "") || (str2 == "")) {
    console.log("Повторений не было");
}
for (let i = 0; i < str6.length; i++) {
    let l = str6.charAt(i);
    if ((l == l.toLowerCase()) && (l.charCodeAt() >= 97) && (l.charCodeAt() <= 122)) {
        str7 = str7 + l.toUpperCase();
    }
    else if ((l == l.toUpperCase()) && (l.charCodeAt() >= 65) && (l.charCodeAt() <= 90)) {
        str7 = str7 + l.toLowerCase();
    }
    else str7 = str7 + l;
}
if (str7.length > 0) {
    console.log(str7);
}