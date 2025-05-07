

const username ="Mayuri"
 try{
    someFunction()
    console.log("Hey!!")
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
finally{
    console.log("finally executed")
}
console.log(username)