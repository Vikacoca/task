let str = prompt("Enter the link:");
str = str.trim();
console.log("Your link:", str);
if (str.startsWith("https")) {
    console.log("«При маршрутизации используется либо протокол SSL, либо TLS");
}
else if (str.startsWith("http")) {
    console.log("«Шифрование не применяется");
}
if ((str == "") || (str.includes(" "))) {
    console.log("Ошибка GET запроса");
}