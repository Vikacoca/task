let str = prompt("Enter the string:");
console.log("Your string:", str);
var str2 = "";
for (let i = 0; i < str.length; i++) {
    let l = str.charAt(i);
    if (l == l.toUpperCase())
        str2 = str2 + l.toLowerCase();
    if (l == l.toLowerCase())
        str2 = str2 + l.toUpperCase();
}
console.log("Result:", str2);