// const studentIds = new Array()
// studentIds.push(1)
// studentIds.push(2)
// studentIds.push(1)

// console.log(studentIds)


//sets
const studentIds = new Set()

studentIds.add(1)
studentIds.add(2)
studentIds.add(1)
console.log({studentIds})


//you can convert an set to an array, and array to set

const student_Id = [1,2,3,4,2,6,5]

const uniqueStudent_Id = new Set(student_Id);//array to set
console.log({uniqueStudent_Id})


const newStudent_id = [...uniqueStudent_Id] //set to array
console.log({newStudent_id})

//methods of set
const new_list = new Set();
new_list.add(1)
new_list.add(2)
new_list.add(3)
new_list.add(5)
// new_list.clear()
// new_list.delete(3)
console.log({new_list})
console.log(new_list.size)

console.log(new_list.keys())
console.log(new_list.entries())
console.log(new_list.values())

console.log(new_list.has(5))

//for each - Method

new_list.forEach((value)=>{
    console.log({value})
})