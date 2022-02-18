let flag = false;
let obj = {
    name: "",
    age: "",
    birthday: "",
    status: "",
};
for (let key in obj) {
    let svoistvo = prompt("Введите значение " + "\"" + key + "\"" + " свойства:");
    if (svoistvo == "" || svoistvo.includes(" ")) {
        flag = false;
    } else {
        obj[key] = svoistvo;
        flag = true;
    }
    while (flag == false) {
        svoistvo = prompt("Некорректное значение свойства \"" + key + "\". Попробуйте ещё раз:");
        if (svoistvo == "" || svoistvo.includes(" ")) {
            flag = false;
        } else {
            flag = true;
            obj[key] = svoistvo;
        }
    }
}
console.log(obj);