let str = prompt("Enter the string:");
console.log("Your string:", str);
let str2 = str.toLowerCase();
if ((str2.includes(".ru")) || (str2.includes(".com"))) {
    console.log("Result: YES!");
}
else console.log("Result: NO!");