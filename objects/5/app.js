let counter = 0;
let user = {
};
let amount = +prompt("Сколько свойств будет в объекте?");
if (isNaN(amount) || amount < 0) {
    console.log("Некорректное число свойств.")
} else {
    if (amount > 0) {
        for (let i = 1; i <= amount; i++) {
            let key = prompt("Введите свойство #" + i + " объекта:");
            user[key] = prompt("Введите значение #" + i + " свойства:");
            if (isNaN(user[key])) {
            } else counter++;
        }
        console.log("Число пар, где значение - число:", counter);
        console.log(user);
    } else console.log("Объект пустой.");
}