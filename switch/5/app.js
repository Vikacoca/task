for (let i = 0; i < 3; i++) {
    let answer = prompt("Что это такое: синий, большой, с усами и полностью набит зайцами?");
    switch (answer) {
        case "Троллейбус":
            console.log("Правильно!");
            break;
        case "Сдаюсь":
            console.log("Правильный ответ: троллейбус");
            break;
        default:
            console.log("Подумай ещё");
            break;
    }
    if (answer == "Троллейбус" || answer == "Сдаюсь")
        break;
}