let str = prompt("Enter the number");
var flag = false;
console.log("Entered number:", str);
if (str.startsWith("+375")) {
    flag = true;
}
if (flag == true) {
    for (let i = 1; i < str.length; i++) {
        let l = str.charAt(i);
        if (l.charCodeAt() < 48 || l.charCodeAt() > 57) {
            flag = false;
        } else flag = true;
        if (flag == false) break;
    }
}
// if (flag == true) {  // мы можем сокращать такие условия, в которых только одна инструкция, даже не загромождать код 
//     console.log("Звоним...");
// }
// else console.log("Некорректный номер");
flag == true ? console.log("Звоним...") : console.log("Некорректный номер"); // тернарный оператор