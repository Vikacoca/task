let flag = true;
for (let i = 1; i <= 10; i++) {
    let num = +prompt("Введите число:");
    console.log(num);
    if (num % 2 == 0 && flag != false) {
        flag = true;
    } else flag = false;
}
if (flag == true) {
    console.log("YES!");
} else console.log("NO!");