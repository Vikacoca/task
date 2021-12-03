let str = prompt("Enter the string:").trim();
// str = str.trim();
console.log("Your string:", str);
let x = 1;
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == " ") {
        x += 1;
    }
}
console.log("Result:", x);