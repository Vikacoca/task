let n = +prompt("Введите число:");
let sum = 0;
for (let i = 1; i <= n; i++) {
    let sq = Math.pow(i, 2);
    if (sq.toString().endsWith("2") || sq.toString().endsWith("5") || sq.toString().endsWith("8")) {
        sum = sum + i;
    }
}
if (sum != 0) {
    console.log(sum);
} else {
    console.log(0);
}