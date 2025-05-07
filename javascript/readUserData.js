/*Readlinesync -read data from user*/
const readlineSync = require("readline-sync");
const userName = readlineSync.question("What is your name ?  ");
const userAge = readlineSync.question("May I know your Age?")

console.log(`Welcome ${userName} to GFG `);
console.log("Thanks for letting us to know your age")

console.log(typeof userAge)

const yearOfBirth = 2025 - Number(userAge);
console.log(`You were born in the year ${yearOfBirth}`);
