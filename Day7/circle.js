let circle = document.getElementById('a');
function color() {
  console.log(circle);
  if (circle.style.background == 'red') 
    circle.style.background = "blue";
  else if (circle.style.background == "blue")
    circle.style.background = "yellow";
  else if (circle.style.background == "yellow")
    circle.style.background = "green";
  else circle.style.background = "red";
}


// z = document.getElementById("a");
// console.log(a);

// function color() {
//   // z.style.background='blue';

//   if (z.style.background == "palevioletred") {
//     z.style.background = "blue";
//   } else if (z.style.background == "blue") {
//     z.style.background = "yellow";
//   } else if (z.style.background == "yellow") {
//     z.style.background = "black";
//   } else {
//     z.style.background = "palevioletred";
//   }
// }