let str = prompt("Enter the number");
var flag = false;
console.log("Entered number:", str);
if ((str.startsWith("+375")) && (str.length == 13)) {
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

flag == true ? console.log("Звоним...") : console.log("Некорректный номер"); // тернарный оператор
// if (flag == true) {
//     console.log("Звоним...");
// } else console.log("Некорректный номер");
console.log(str.length);