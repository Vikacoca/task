let str = prompt("Enter your Surname and Name:");
console.log("Your string:", str);
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).charCodeAt() == 32) {
        var a = i + 1;
    }
}
if ((str.charAt(0) == str.charAt(0).toUpperCase()) && str.charAt(a) == str.charAt(a).toUpperCase()) {
    console.log("Result: YES");
}
else {
    console.log("Reuslt: NO");
}