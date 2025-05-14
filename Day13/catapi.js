
function cat(){
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then(res => res.json())
    .then(data=>{
        document.querySelector('img').src=data[0].url
        console.log(data)
    })
}