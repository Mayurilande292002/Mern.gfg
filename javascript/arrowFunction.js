/**
 * Arrow function
 */
//arrow function
const calculateSum = function(x,y){
    return x+y;
}

//Arrow function
const calculateAdd=(x,y)=>{
    return x + y;
}
console.log(calculateAdd(12,14))

const calculateSubstraction =(a,b)=>a-b;
console.log(calculateSubstraction(12,66))


//====================================

const operation = (x,y) => x > y ? x + y : x - y;
const output = operation(4550,952)
console.log(output)

/** exercise
 * sum of all numbers from 1-20
 */

function calculateSumOf(min,max){
    let total = 0;
for(let i=min;i<=max;i++){
    total = total+i;
}
console.log(total);
}
const resultt = calculateSumOf(1,20)
console.log(resultt)

const outPut = calculateSumOf(20,100)
console.log(outPut)