let str = prompt("Enter the link:");
str = str.trim();
console.log("Your link:", str);
if ((str.startsWith("https")) && ((str.endsWith(".com")) || (str.endsWith(".ru")) || (str.endsWith(".by")) || (str.endsWith(".org")))) {
    console.log("«При маршрутизации используется либо протокол SSL, либо TLS");
}
else if ((str.startsWith("http")) && ((str.endsWith(".com")) || (str.endsWith(".ru")) || (str.endsWith(".by")) || (str.endsWith(".org")))) {
    console.log("«Шифрование не применяется");
}
if ((str == "") || (str.includes(" "))) {
    console.log("Ошибка GET запроса");
}