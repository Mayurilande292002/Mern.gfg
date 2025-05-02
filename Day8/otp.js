let z = Math.random() *10
console.log(z)
console.log(Math.floor(0.3457727205740745*10))
 
let btn = document.querySelector('button')
console.log(btn)

btn.addEventListener('click',()=>{
    let otp =""
    for(i=0;i<6;i++){
        otp+=Math.floor(Math.random()*10)
    }
    document.getElementById('s').textContent = otp
})