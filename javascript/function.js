
/** functions
 * 1. function statement / function declaration 
 *
 */

//Function deckaration  or function statement
function greetMessage(name, city){//name us called as a parameter 
    console.log(`${name}, Welcome to  GeeksforGeeks`)
    console.log(`Thankyou for joining from ${city}`)
}

greetMessage("Mayuri", "SambhajiNagar");// mayuri is called as an argument 
greetMessage("Vedant", "Pune")


function calculate(min, max){
    let sum=0
    for(let i =min; i<=max; i++){
        sum =sum + i;
    }
    console.log(sum)
}
calculate(1,100);
calculate(1,10);