const fruits=["🍎","🥭","🍇","🍎","🥭","🍇","🍎","🥭","🍇"]

for(i=0;i<fruits.length;i++){
    console.log(fruits[i]+i)
    if(fruits[i]=="🍎"){
        document.getElementById('a').textContent+='🍎'
    }
    else if (fruits[i] =="🍇")
        document.getElementById('b').textContent+='🍇'
    
    else {
        document.getElementById('c').textContent+='🥭'
    }
}

// document.getElementById('a').textContent='🍎'
// document.getElementById('b').textContent='🍇'
// document.getElementById('c').textContent='🥭'

//swap the values
a=20;
b=30;
conslole.log("The value of a after swapping is "+a)
conslole.log("The value of b after swapping is "+b)
//logic
a=a+b
b=a-b
a=a-b
console.log('a is'+a)
console.log('b is'+b)