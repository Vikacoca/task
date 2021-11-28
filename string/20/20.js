let str = prompt("Enter the string:");
console.log("Your string:", str);
if ((str.endsWith(".com")) || (str.endsWith(".ru")) || (str.endsWith(".RU")) || (str.endsWith(".COM")) || (str.endsWith(".Ru"))
    || (str.endsWith(".rU")) || (str.endsWith(".Com")) || (str.endsWith(".cOm"))
    || (str.endsWith(".coM")) || (str.endsWith(".cOM"))
    || (str.endsWith(".CoM")) || (str.endsWith(".COm"))) {
    console.log("Result: YES!");
}
else console.log("Result: NO!");