let N = +prompt("Введите число:");
let i = 0;
let sumofnumbers = 0;
let amountofnumbers;
let multiplication = 1;
let firstnumber;
let sumoffirstandlast;
if (!(isNaN(N) || N < 1)) {
    firstnumber = N.toString().charAt(0);
    let j = N.toString().length;
    lastnumber = N.toString().charAt(j - 1);
    sumoffirstandlast = +firstnumber + +lastnumber;
    while (i < N.toString().length) {
        let element = N.toString().charAt(i);
        multiplication = multiplication * +element;
        sumofnumbers = sumofnumbers + +element;
        i++;
    }
    console.log("Entered number:", N);
    console.log("Sum of numbers:", sumofnumbers);
    console.log("Amount of numbers:", amountofnumbers = N.toString().length);
    console.log("Multiplication:", multiplication);
    console.log("Average:", (sumofnumbers / amountofnumbers).toFixed(1));
    console.log("First number:", firstnumber);
    console.log("Sum of first and last elements:", sumoffirstandlast);
} else console.log("Некорректное число");