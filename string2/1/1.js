// let str = prompt("Enter the link:");
// str = str.trim();
// console.log("Your link:", str);
// if (str.startsWith("https")) {
//     console.log("«При маршрутизации используется либо протокол SSL, либо TLS");
// } else if (str.startsWith("http")) {
//     console.log("«Шифрование не применяется");
// }
// if ((str == "") || (str.includes(" "))) {
//     console.log("Ошибка GET запроса");
// }


// ты написал полностью правильно. но я бы сначала сделала так:
// сначала проверить на пустую строку, а потом просто искать https. 
// так логичнее и меньше головной боли.
// но повторюсь, у тебя тоже вариант рабочий! Просто чтоб понимал как сделал бы более опытный человек

let str = prompt("Enter the link:").trim();
if (str.length > 0) {
    if (str.startsWith("https")) console.log("«При маршрутизации используется либо протокол SSL, либо TLS");
    else console.log("«Шифрование не применяется");
} else {
    console.log("Ошибка GET запроса");
}
