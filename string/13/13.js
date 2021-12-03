let str = prompt("Enter the string with every word ending with '_':");
str = str.split("_");
// str = "";
for (let i = 1; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
// str = arr.join("");
console.log(str.join(""));