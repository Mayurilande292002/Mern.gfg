const person ={
    name:"Mayuri",
    age:33,
    isAlive:true,
    hobbies:["reading","coading","cooking"]
}
document.querySelector('h2').textContent+=person.hobbies[1]

console.log(typwof(person))
const z = JSON.stringify(person)
console.log(typeof(z))
const y=JSON.parse(z)