let N = +prompt("Введите кол-во слов:");
let arr = [];
let j = 0;
let word;
let condition = 1;
let counter = 0;
if (!(isNaN(N) || N < 1)) {
    while (condition <= N) {
        word = prompt("Введите слово:");
        arr.push(word);
        condition++;
    }
    while (j < arr.length) {
        if (arr[j] == "стоп" || arr[j] == "хватит" || arr[j] == "достаточно") break;
        counter++;
        j++;
    }
    console.log(counter);
} else console.log("Некорректное кол-во слов");