let user = {
    name: "John",
    age: 30,
};
if (!(Object.keys(user).length === 0)) {
    for (let key in user) {
        if (key === "age") {
            console.log("Ключ age имеется.");
        }
    }
} else console.log("Объект пуст.")