let number = +prompt("Enter a number");
if ((number > 999 && number < 10000) && (number % 7 == 0 || number % 17 == 0)) {
    console.log("YES");
}
else console.log("NO");