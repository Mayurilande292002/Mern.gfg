let myApi='https://sweetfruit.vercel.app/fruits'
console.log(myApi)
fetch(myApi)
.then(res => res.json())

.then(data=>{
      document.querySelector('a').textContent+=data[5].name
      document.querySelector('b').textContent+=data[5].taste
      console.log(data)
}
)