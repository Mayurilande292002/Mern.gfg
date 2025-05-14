
// const data = document.querySelector('form')
// const id = document.querySelector('input')
// const POKE = "https://pokeapi.co/api/v2/pokemon"
// data.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     const name = IdleDeadline.value.toLowerCase()
//     console.log(name)
//     id.value = ""
// })
// fetch(POKE + name)
// .then(res =>{
//     if(!res.ok){
//         throw new Error("Pokemon not found")
//     }
//     return res.json()
// })
// then

const createMember = ({email,address = {}}) => {
    const validEmail = /.+@.+..+/.test(email)
    if(!validEmail) throw new Error("Valid email pls")
        return{
    email,
    address:address||null
}
}
const member = createMember({email : "my@email.com"})
console.log(member)
