var str = prompt("Enter your string:");
var str2 = "";
for (let i = 0; i < str.length; i++) {
    let l = str.charAt(i);
    if (l.charCodeAt() == 98) {
        str2 = str2 + str.substr(i, 1);
    }
}
console.log("Result:", str2);