/**Conditional statements */


// const isLoggedin =true;
// if(isLoggedin){
//     console.log("hello, I am from geeks for geeks")
//     }

// const readlineSync =require("readline-sync")

// const userAge = readlineSync.question("How old are you ? ")
// if(userAge>16){
//     console.log("hey you are an adult...")
// }else{
//     console.log("you are not an adult...")
// }

/////////////////////////////////////////////////////
// 

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/**Nested if-else */

// var readlineSync= require("readline-sync")
// const number = Number(readlineSync.question("Enter the number: "))
// console.log(number)

// const remainder = number % 2;

// if(remainder===0){
//     console.log(`${number} is an even number`)
// }
// else{
//     console.log(`${number} is odd number`)
// }



//example2 -- prints 3 strigs and print the smallest srtring 
const readlineSync=require("readline-sync")

const firstString = readlineSync.question(`Enter the first string `)
const secondString = readlineSync.question(`Enter the second string `)
const thirdString = readlineSync.question(`Enter the third string `)


console.log(`First string is ${firstString} . 
Second string is ${secondString}.
Third string is ${thirdString}.`)
const lengthOfFirstStr = firstString.length
const lengthOfSecondStr = secondString.length
const lengthOfThirdStr = thirdString.length

if(lengthOfFirstStr < lengthOfSecondStr && lengthOfFirstStr < lengthOfThirdStr){
    console.log(`${firstString} is smallest string`)
}
else if(lengthOfSecondStr < lengthOfFirstStr && lengthOfSecondStr < lengthOfThirdStr){
    console.log(`${secondString} is smallest string`)
}
else if(lengthOfThirdStr < lengthOfFirstStr && lengthOfThirdStr < lengthOfSecondStr){
    console.log(`${thirdString} is smallest string`)
}else{
    console.log(`found 2 or more string of the same length`)
}