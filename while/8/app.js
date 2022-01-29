let N = +prompt("Введите число:");
let i = N.toString().length;
let flag = true;
if (!(isNaN(N) || N < 1)) {
    while (i > 0) {
        if (N.toString().charAt(i) <= N.toString().charAt(i - 1)) {
            flag = true;
        } else {
            flag = false;
            break;
        }
        i--;
    }
    if (flag == true) {
        console.log("YES");
    } else console.log("NO");
} else console.log("Некорректное число");
