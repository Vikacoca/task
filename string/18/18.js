let str = prompt("Enter the string:");
str = str.trim();
console.log("Your string:", str);
a = 1;
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == " ") {
        a += 1;
    }
}
console.log("Result:", a);