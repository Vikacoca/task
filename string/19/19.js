const str = prompt("Enter the string:");
console.log("Your string:", str);
let a = 0, b = 0, c = 0, d = 0;
for (let i = 0; i < str.length; i++) {
    if ((str.charAt(i) == "А") || (str.charAt(i) == "а")) {
        a += 1;
    }
    else if ((str.charAt(i) == "Г") || (str.charAt(i) == "г")) {
        b += 1;
    }
    else if ((str.charAt(i) == "Ц") || (str.charAt(i) == "ц")) {
        c += 1;
    }
    else if ((str.charAt(i) == "Т") || (str.charAt(i) == "т")) {
        d += 1;
    }
}
console.log("Аденин: ", a);
console.log("Гуанин: ", b);
console.log("Цитозин: ", c);
console.log("Тимин: ", d);