// console.log(h1);

// let x;
// setInterval(() => {
//   x = "Hello";

//   console.log(x);
// }, 1000);

// setTimeout(() => {
//   console.log("OKay");
// }, 1000);

// let x = 0;

// setInterval(() => {
//   x++;

//   console.log(x);
// }, 1000);

// let h1 = document.getElementById("H1");
// let btn = document.getElementById("btn");
// let stopbtn = document.getElementById("stop");
// let reset = document.getElementById("reset");

// let myinterval;
// let count = 0;

// function start() {
//   myinterval = setInterval(() => {
//     count += 1;

//     h1.textContent = count;
//   }, 1000);
// }

// function stopfn() {
//   clearInterval(myinterval);
// }
// function resetFN() {
//   clearInterval(myinterval);
//   h1.textContent = 0;
// }

// btn.addEventListener("click", start);
// stopbtn.addEventListener("click", stopfn);
// reset.addEventListener("click", resetFN);

// console.log(y);
let body = document.getElementById("bodytag");

let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

let bg = `rgb(${red}, ${green}, ${blue})`;

console.log(bg);
body.style.backgroundColor = bg;


// let x = 3.9
// console.log(Math.floor(x));
