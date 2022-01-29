let N = +prompt("Введите кол-во слов:");
let arr = [];
let j = 0;
let word;
let condition = 1;
if (!(isNaN(N) || N < 1)) {
    while (condition <= N) {
        word = prompt("Введите слово:");
        arr.push(word);
        condition++;
    }
    while (j < arr.length) {
        if (arr[j] == "КОНЕЦ") break;
        console.log(arr[j]);
        j++;
    }
} else console.log("Некорректное кол-во слов");