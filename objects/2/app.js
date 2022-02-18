let test = {
    name: "",
    surname: "",
    years: "",
    months: "",
    days: "",
}
for (let key in test) {
    let svoistvo = prompt("Введите значение " + "\"" + key + "\"" + " объекта:");
    test[key] = svoistvo;
    if (isNaN(test[key])) {
    } else {
        test[key] = test[key] * 2;
    }
}
console.log(test);
