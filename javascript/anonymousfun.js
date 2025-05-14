/**
 * 1. \Anonymous functions and function Expression
 */
//normal function
function greetMessage(){
    console.log("Hello")
}
greetMessage()

//Anynomous function --cannot be accessed before initialization
var anynomousFunction = function(){
    console.log("Hie......")
}
anynomousFunction();
console.log(typeof anynomousFunction)

// var anynomousFunction = function greet(){
//     console.log("Hie......")
//     console.log(typeof greet)
// }
// anynomousFunction();
// console.log(typeof anynomousFunction)

/**
 * functions
 * return
 */

function calculateSum(x,y){
    return x + y;
    console.log("hey")//disabled here
}

console.log(calculateSum(12,16))

// const result = calculateSum(13,12);
// console.log(result)

// const output = calculateSum(13,32);
// console.log(output)