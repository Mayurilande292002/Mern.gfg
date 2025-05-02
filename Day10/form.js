let uName=document.querySelectorAll('input')[0]
// console.log(uName)
let pass = document.querySelectorAll('input')[1]
// console.log(pass)
let myData = document.querySelector('form')
console.log(myData)
myData.addEventListener('submit',(event)=>{
event.preventDefault()
console.log(uName.value)
console.log(pass.value)

if(uName.value.trim()==""||pass.value.trim()==""){
    alert("No blank Please")
    return
}
else if(pass.value.length<6){
    alert("To small password")
    return
}else if(pass.value.length>15){
    alert("Password too long")
    return
}
// else if(pass.value.length=" "){
//     alert("Blank spaces not allowed")
    
// }

{
    window.location.href= "welcome.html"
}

})