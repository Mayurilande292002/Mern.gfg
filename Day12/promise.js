a ="hello"
console.log(Promise)
let p = new Promise((resolve,reject)=>{
    reject("issue resolved")
})
p.then((data)=>{
    console.log(data)
})
    .catch((error)=>{
        console.error("The problem is "+ error)
    })

let myCalculation = new Promise((resolve,reject)=>{
let num =2+2
if(num==4){
    resolve("success")
}else{
    reject("fail")
}
}
)
myCalculation.then((message)=>{
    console.log("The result is "+message)
}).catch((message) => {
    console.error("The problem is"+message)
})