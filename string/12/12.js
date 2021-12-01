var str = prompt("Enter the string:");
console.log("Your string:", str);
var arr = str.split(" ");
str = "";
for (let i = 0; i < arr.length; i++) {
    str = str + arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
}
console.log("Result:", str);