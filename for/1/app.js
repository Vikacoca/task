let n = +prompt("Enter the number or rows:");
if (isNaN(n) || n < 1 || n > 20) {
    console.log("Incorrect number");
}
else for (let i = 1; i <= n; i++) {
    if (i < 10)
        console.log(i + "  *******************");
    else console.log(i + " *******************");
}