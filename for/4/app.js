let m = +prompt("Введите первое число:");
let n = +prompt("Введите второе число:");
if (m < n) {
    for (; m <= n; m++) {
        console.log(m);
    }
}
else for (; m >= n; m--) {
    console.log(m);
}