let user = [
    {
        name: "John",
        age: 30,
    },
    {
        name: "Bob",
        age: 21,
    },
    {
        name: "Anna",
        age: 19,
    },
]
let arr = [];
arr.push(user[0]);
for (let i = 1; i < user.length; i++) {
    if (user[i].age < user[0].age) {
        arr.unshift(user[i]);
    } else arr.push(user[i]);
}
console.log(arr);