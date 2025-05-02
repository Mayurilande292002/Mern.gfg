const fruits=["apple","mango","banana","chikoo"]
console.log(fruits)







fruits.shift()
console.log(fruits)
fruits.reverse()
console.log(fruits.length)
console.log(fruits.includes('grapes'))
z=fruits.toString()
console.log(z.toUpperCase())
console.log(typeof(fruits))
console.log("_________")
const colors =["red","blue","green","orange"]
for(i=0;i<colors.length;i++){
    console.log(i, colors[i])
}

for(i=0;i<colors.length;i++){
    console.log(i,colors[i])
}
let favColor= document.querySelector("h3")
favColor.textContent=colors[3]