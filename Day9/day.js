let website = document.querySelector("body")
console.log(website)
let btn = document.querySelector('button')
console.log(btn)
btn.addEventListener('click',()=>{
    website.classList.toggle('night')
    website.style.transition='3s'
})