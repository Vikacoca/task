let str = prompt("Enter the string:");
console.log("Your string:", str);
var a = 0;
for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == str.charAt(i).toLowerCase()) {
        a += 1;
    }
}
console.log("Result:", a);