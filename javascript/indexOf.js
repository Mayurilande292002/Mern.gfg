/**
 * index of Method
 * 
 */

// const displayMessage = "I am a Student at geeks for geeks"
// console.log(displayMessage.indexOf("a",7))

// function findCharater (text, char){

//     const index = text.indexOf(char)
//     return index;
//     if(index === -1){
//         return "Char not found"
//     }
//     else{
//         return "Chae found in the String"
//     }
// }

//using arrow function
const findCharacter = (text,char) => text.indexOf(char)=== -1 ? "char not foundd":"char found";
const result = findCharacter("I am Mayuri Lande", "M")
console.log(result)