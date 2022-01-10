let column1 = +prompt("Enter the column #1:");
let row1 = +prompt("Enter the row #1:");
let column2 = +prompt("Enter the column #2:");
let row2 = +prompt("Enter the row #2:");
flag = true;
if ((column1 < 1 || column1 > 8) || (column1 < 1 || column1 > 8) ||
    (row2 < 1 || row2 > 8) || (row1 < 1 || row1 > 8)) {
    flag = false;
}
if (flag == false) {
    console.log("Incorrect field");
}
while (flag) {
    if (column1 == column2 || row1 == row2) {
        console.log("YES");
    }
    else console.log("NO");
    break;
}