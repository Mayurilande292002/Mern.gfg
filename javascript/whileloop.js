/**
 * while loop
 * do while loop
 */

// let i=0;
// while(i<10){
//     console.log(i)
//     i=i+1
// }
// console.log("execution done!!")

// let i=0;
// // do{
// //     console.log(i)
// //     i++
// // }while(i>10)

// while(i<10){
//     console.log(i);
//     i = i + 1
// }

let readlineSync = require("readline-sync");

let number = readlineSync.question("Enter the number less than 50 ");

while(number>=50){
    number = readlineSync.question("Enter the number less than 50 ")
}
console.log("Number accepted ")