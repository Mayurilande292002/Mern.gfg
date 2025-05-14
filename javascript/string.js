// /**
//  * Iterating over strings 
//  */

// let displayMessage = "Hii, I am Mayuri Lande"
// // let count = 0;
// // for(let char of displayMessage){
// //     // console.log(char);
// //     if(char =="a"){
// //         // break/
// //         count++
// //     }
// //     // else{
// //     //     console.log(char)
// //     // }
// // }
// // console.log(count)

// // console.log(displayMessage[11])

// // console.log(displayMessage[1])

// // console.log(displayMessage[17])

// for(let i=0; i<displayMessage.length;i++){
//     if(displayMessage[i]=="n"){
//         break
//     }
//     else{
//         console.log(displayMessage[i])
//     }
// }


/**
 * String methods
 * charAt()| charCodeAt()
 */
const displayMessage = "I am a Student at GFG"
const index = 7 ;
// const char = displatMessage.charAt(index)
// console.log(char);


//ASCII
const asciicode = displayMessage.charCodeAt(index);
// console.log(asciicode)
console.log(`The ascii code of ${displayMessage.charAt(index)} is ${asciicode}`)