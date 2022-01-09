let dogage = +prompt("Enter the dog age:");
let humanage = 0;
if (dogage < 3) {
    for (let i = 1; i <= dogage; i++) {
        humanage = humanage + 10.5;
    }
}
else {
    humanage = 21;
    for (let i = 1; i <= dogage - 2; i++) {
        humanage = humanage + 4;
    }
}
console.log(humanage);