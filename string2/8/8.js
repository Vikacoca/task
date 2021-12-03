let str = prompt("Enter the nubmer:");
console.log("Your nubmer", str);
str = str.trim();
var flag = true;

if ((str.length == 0) || (str.length != 7)) flag = false;

if (flag == true) {
    for (let i = 1; i < str.length; i++) {
        let l = str.charAt(i);
        if (l.charCodeAt() < 48 || l.charCodeAt() > 57) {
            flag = false;
        } else flag = true;
        if (flag == false) break;
    }
}
if (flag == true) {
    str = str.split("");
    let str2 = str[0] + str[1] + str[2] + "-" + str[3] + str[4] + "-" + str[5] + str[6];
    console.log(str2);
} else console.log("Некорректный номер");
console.log(str.length);