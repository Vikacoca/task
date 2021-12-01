let str = prompt("Enter the string:");
str = str.trim();
console.log("Your string:", str);
x = 1;
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == " ") {
        x += 1;
    }
}
console.log("Result:", x);