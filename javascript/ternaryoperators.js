/**Ternary Operatord  --> condition? yes/no  */
// const totalMarkScored =60;
// if (totalMarkScored<40){
//     console.log("you need to work hard ")
// } else{
//     console.log("you cleared the exam🥳🥳🥳")
// }

// const totalMarkScored =20
// (totalMarkScored<40)? console.log("you need to work hard!") : console.log("you cleared the exam🥳🥳🥳")

// const result = totalMarkScored<40 ? "you need to work hard "  : "congrulations"
//console.log(result)

const totalMarkScored =89;
// if(totalMarkScored <40){
//     console.log("you need to work hard ")
// }
// else if(totalMarkScored<60){
//     console.log("B grade")
// } 
// else if(totalMarkScored<75){
//     console.log("A grade")
// }
// else if(totalMarkScored<85){
//     console.log("A+ grade")
// }
// else{
//     console.log("Genius")
// }

const result = totalMarkScored < 40 ? "you need to work hard " :
 totalMarkScored < 60 ? "B grade" : totalMarkScored<75 ? "A grade" :
  totalMarkScored < 85 ? "A+ grade" : "Genius";
console.log(result)