let arr = [];
for (let i = 1; i <= 5; i++) {
    let num = +prompt("Введите число:");
    arr.push(num);
}
for (let n = 0; n < arr.length; n++) {
    console.log(arr[n]);
}