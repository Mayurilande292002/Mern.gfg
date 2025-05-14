/**
 * key types
 * key order
 * size
 * Iteration
 * Permormance (insertion, deletion)
 */

const newMap = new  Map();

newMap.set(10,`value will be here`)
newMap.set(11,`awesome`)
// console.log(newMap.get(10))

// newMap.delete(10)
console.log(newMap.size)

newMap.forEach((value)=>{
    console.log(value)
})