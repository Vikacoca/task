let number = +prompt("Enter the nubmer");
if (number > 36 || number < 0) {
    console.log("Incorrect number");
}
if (number == 0) {
    console.log("Зелёный");
}
for (let i = 1; i <= 10; i++) {
    if (number % 2 == 0 && number == i) {
        console.log("Чёрный");
    }
    if (number % 2 == 1 && number == i) {
        console.log("Красный");
    }
}
for (let i = 11; i <= 18; i++) {
    if (number % 2 == 0 && number == i) {
        console.log("Красный");
    }
    if (number % 2 == 1 && number == i) {
        console.log("Чёрный");
    }
}
for (let i = 19; i <= 28; i++) {
    if (number % 2 == 0 && number == i) {
        console.log("Чёрный");
    }
    if (number % 2 == 1 && number == i) {
        console.log("Красный");
    }
}
for (let i = 29; i <= 36; i++) {
    if (number % 2 == 0 && number == i) {
        console.log("Красный");
    }
    if (number % 2 == 1 && number == i) {
        console.log("Чёрный");
    }
}