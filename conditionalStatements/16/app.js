let year = +prompt("Enter the year:");
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0 && year % 100 != 0)) {
    console.log("YES");
}
else console.log("NO")