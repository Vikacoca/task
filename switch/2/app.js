let day = +prompt("Enter the day");
(day >= 1 && day <= 10) ? day = 1 : (day >= 11 && day <= 20) ? day = 2 :
    (day >= 21 && day <= 31) ? day = 3 : console.log("Некорректный ввод");
switch (day) {
    case 1:
        console.log("Первая декада");
        break;
    case 2:
        console.log("Вторая декада");
        break;
    case 3:
        console.log("Третья декада");
        break;
}