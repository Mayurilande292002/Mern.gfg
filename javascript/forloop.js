/**
 * for loop
 SYNTAX
for(startValue; Condition;Incremental/decrementalValue)
 */

// for( let i=0;i<10;i++){
//     console.log(i)
//     console.log("hello...")
// }
// console.log("loop execution is done")

// const name = "Mayuri lande"
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(name[3])

// for(let i=0;i<10;i++){
//     console.log(i)
// }
// const username = "Mayuri lande"
// const stringLength = username.length
// // console.log(stringLength)

//  for(let i=0;i<stringLength;i++){
//     console.log(`${username[i]}  ${i}`)
//  }
 //-------------------------------------------------------------------------------------------------------------------
 /** Nested for loop */
//  for(let i =1;i<=10;i++){
//    for(let j=1;j<=12;j++){
//       console.log(`${i} x ${j} = ${i*j}`)
//    }
//  }

/** star pattern */
// const symbol="*"
// for(let i=1;i<=6;i++){
//    console.log(symbol.repeat(i))
// }

// const symbol="*"
// for(let i=6;i>=1;i--){
//    console.log(symbol.repeat(i))
   
// }

// const userName = "Mayuri Raamnath Lande";
// let count = 0;
// for(let i=0;i<userName.length;i++){
//    console.log(count++);
// }
// console.log(`No of characters in the string is ${count}`)

/**
 * find even and odd numbers
 */
// let remainder;
// for( let i=1;i<=101;i++){
//     remainder=i%2;
//     if(remainder===0){
//       console.log(`${i} is an even`)
//     } else{
//       console.log(`${i} is odd`)
//     }
// }
//
// finding vowels in string

"Mayuri".includes("a")
const inputString ="Hello, I love gfg...."
const vowels="aeiou"
for(let i=0;i<inputString.length;i++){
   if(vowels.includes(inputString[i])){
      console.log(`${inputString[i]} is not a vowel`)
}else {
   console.log(`${inputString[i]} is not a vowel`)
}
}