let flag = false;
let user = {
};
let amount = +prompt("Сколько свойств будет в объекте?");
if (isNaN(amount) || amount < 0) {
    console.log("Некорректное число свойств.")
} else {
    if (amount > 0) {
        for (let i = 1; i <= amount; i++) {
            let key = prompt("Введите свойство #" + i + " объекта:");
            user[key] = prompt("Введите значение " + i + " свойства объекта:")
        }
        flag = true;
        console.log(flag);
        console.log(user);
    } else console.log(flag + ". Объект пустой.");
}