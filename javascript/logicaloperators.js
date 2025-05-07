/** LOgical operators
 * 1. OR || -- at least one condition is true then or will return true else false
 * 2. AND && -- all conditions must true then and will return true else it will return false
 * 3. NOT !
 * 4. NULLISH COALESCING
 */
const phy=0;
const maths=9;
const chem =8;
const bio = 96;

// if( phy > 85 && maths > 85 && chem > 85){
//     console.log("you are eligible for IIT.......")
// }
// else {
//     console.log("you are not eligible for IIT.........")
// }

// if(phy >90 || maths > 85 || chem > 89){
//     console.log("you are eligible for IIT.......")
// }
// else{
//     console.log("you are not eligible for IIT.......")
// }

// const isStudentEligible = true;
// if(! isStudentEligible){
//     console.log("you are eligible")
// } else {
// console.log("you are not eligible")
// }





//================================================================================================================
// const firstName = "Mayuri"
// const nickName = " Mayu"

// console.log(firstName|| nickName)

// console.log(Boolean(0))

// const firstName = "Mayuri"
// const nickName = " Mayu"
//  const username = firstName || nickName
//  console.log(username)

//  let a =12
//  let b =3;
//  console.log(a+(b || 0))

 console.log(3||2||1)
 console.log(""||0||2)
 console.log(""||0||undefined)
 console.log(""||"null"||2)
console.log("a"&&"b"&&"c")