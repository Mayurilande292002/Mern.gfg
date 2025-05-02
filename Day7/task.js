myText=document.getElementById('b')
function hii(){
    if(myText.textContent == 'Now I know Js')
        myText.textContent = 'I like js'    
else{
    myText.textContent = 'Now I know Js'
}
}

myText=document.getElementById('c')
function hide(){
 if( myText.textContent=='Hide me when you click')
    // myText.textContent = " "
    myText.style.visibility = 'hidden'
else{
    myText.textContent = 'Hide me when you click'
}
}