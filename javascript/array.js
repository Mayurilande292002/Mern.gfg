// /**
//  * Array--> Non primitive datatype 
//  */

// let studentsName = ["prakash","adarsh","riya","jay","piyush",1,2,3,4,["html","css","js"]]
// let arrLength = studentsName.length;
// // console.log(arrLength)
// // console.log(studentsName)

// // console.log("_______________________")
// // console.log(studentsName[0])
// // console.log(studentsName[1])


// // for(let i=0; i<arrLength;i++){
// //     console.log(studentsName[i])
// // }

// // for(let name of studentsName){
// //     console.log(name)
// // }
// // /**
// //  * for let in
// //  */

// for (let index in studentsName){
//     console.log(studentsName[index])
// }

//----------------------------------------------------------------------------------------------------------------------------------

/**
 * Array methods - push and concat
 */

// mutable object(obj that can be changed) and immutable(cannot be changed)

// let fruits=['apple', 'mango','banana']
// console.log(fruits)
// fruits.push('orange')
// console.log(fruits)
// fruits.push('kivi','berries')
// console.log(fruits)

// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3 = [7,8,9]

// // let arr3 = arr1.concat(arr2)
// let arr4 = arr1.concat(arr2)
// let arr5 = arr1.concat(arr2,arr3)
// console.log(arr4)
// console.log(arr5)

//-----------------------------------------------------------------------------------

/**
 * pop, slice, splice
 */

let courses = ['html','css','js','reactjs'];
console.log("courses-",courses)

let removedItem = courses.pop()
console.log("removedItem-",removedItem)
console.log("Updated courses-",courses)