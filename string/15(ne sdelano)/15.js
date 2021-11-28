let str = prompt("Enter the string:");
console.log("Your string:", str);
for (let i = 0; i < str.length; i++) {
    let l = str.charAt(i);
    if ((l.charCodeAt() > 96) && (l.charCodeAt() < 123))
        str = str.replaceAll(l, l.toUpperCase());
}

console.log("Result:", str);