let num = +prompt("Enter the number:");
let result;
switch (num) {
    case 1:
        result = "Весна";
        break;
    case 2:
        result = "Лето";
        break;
    case 3:
        result = "Осень";
        break;
    case 4:
        result = "Зима";
        break;
    default:
        result = "Некорректный ввод";
        break;
}
console.log(result);