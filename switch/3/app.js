let month = +prompt("Enter the month");
(month >= 3 && month <= 5) ? month = 1 : (month >= 6 && month <= 8) ? month = 2 :
    (month >= 9 && month <= 11) ? month = 3 :
        (month == 12 || month == 1 || month == 2) ? month = 4 : console.log("Некорректный ввод");
switch (month) {
    case 1:
        console.log("Весна");
        break;
    case 2:
        console.log("Лето");
        break;
    case 3:
        console.log("Осень");
        break;
    case 4:
        console.log("Зима");
        break;
}