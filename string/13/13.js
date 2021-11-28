let str = prompt("Enter the string with every word ending with '_':");
let arr = str.split("_");
str = "";
for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
str = arr.join("");
console.log(str);