/**
 * string.includes()
 */

const displayMessage = "I love to code in dark mode";

// if(displayMessage.includes("dark")){
//     console.log("Person loves to code in dark mode");
// } else{
//     console.log("Person loves to code in light mode");
// }

const vowels = "aeiouAEIOU"
let flag = false;
for(let char of displayMessage){
    if(vowels.includes(char.toLowerCase)){
        // console.log(`This string has vowels`)
        flag= true;
        break;
    }
    else{
        // console.log(`String doesnot have any vowels`)
        flag = false;
    }
}
if(flag===true){
    console.log(`String has vowels`)
} else{
    console.log(`Steing dont have vowels`)
}