/*z = document.querySelector('h1')
console.log(z)
z.style.background="white"
x= document.getElementsByTagName(h1)[1]
console.log(x)
*/

age=25
if(age>18){
    console.log("Can vote")
}
else{
    console.log('cannot vote')
}
myText=document.getElementById('b')

function hii(){
    if(myText.textContent == 'I am in gfg batch')
        myText.textContent = 'I like Mern Stack'
        
    
else{
    myText.textContent = 'I am in gfg batch'
}
}