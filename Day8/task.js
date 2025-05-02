// let z=document.getElementById('a')
// console.log(z)
// function click(){
//    if(myText.textContent == 'I am heading')
// myText.textContent = 'new batch'    
// else{
//     myText.textContent = 'I am heading'
// }
// }

// function add(a,b){
//     console.log(a+b)
// }
// console.log(add(6,7))
// const add1 =(x,z)=>{
//     console.log(x+y)
// }
// console.log(add1(5,2))


let x=document.querySelector('h1')
let btn=document.querySelector('button')
console.log(btn)
console.log(x)
btn.addEventListener('click',()=>{
    x.textContent ="demo of es6 syntax"
})

let line = document.querySelector('h3')
console.log(line)

let theButton = document.querySelectorAll('button')[1]
console.log(theButton)

theButton.addEventListener('click',()=>{
    line.style.background='red'
    line.style.color="yellow"
    line.style.textAlign= 'center'
})