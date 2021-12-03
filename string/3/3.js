let str = prompt("Enter the data");
// let str2 = prompt("Enter the month");
// let str3 = prompt("Enter the day");
// var str = str1 + "-" + str2 + "-" + str3;
console.log("Your data:", str);
str = str.split("-");
str = str[2] + "/" + str[1] + "/" + str[0];
console.log("Result:", str);