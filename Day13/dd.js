fetch("https://jsonplaceholder.typicode.com/users")
.then(data => data.json())
.then(res => {
   document.getElementById('a').textContent=res[2].name
   document.getElementById('b').textContent=res[2].email
}
)

// document.querySelectorAll('fetch')[2].textContent=(fetch.name)
// console.log(fetch.name[2])