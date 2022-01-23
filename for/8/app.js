let n = +prompt("Введите число:");
let sum = 0;
for (let i = 0; i < n; i++) {
    let num = +prompt("Введите следующее число:");
    sum = sum + num;
}
console.log(sum);