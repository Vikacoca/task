const str1 = prompt("Enter the first string:").trim().toLowerCase();
const str2 = prompt("Enter the second string:").trim().toLowerCase();
const lstIndex = str1.lastIndexOf(str2);
const str5 = str1.substr(lstIndex, str2.length);
if (str2 == str5) 
    console.log("Совпадение выявлено")

else if ((lstIndex == -1) || (str1 == "") || (str2 == "")) 
    console.log("Повторений не было");

console.log("Позиция:", lstIndex);