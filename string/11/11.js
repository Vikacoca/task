let str = prompt("Enter the string:");
console.log("Your string:", str);
str = str.charAt(0).toUpperCase() + str.slice(1);
console.log("Result:", str);