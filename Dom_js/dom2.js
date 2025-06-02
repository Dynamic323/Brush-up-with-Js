console.log("");

// const fruits = ["apple", "banana", "cherry"];

// console.log(fruits[2][5]);

const student = {
  name: "Alex",
  age: "18",
  isEnrolled: true,
};

// console.log(student.age[1]);
// console.log(student.age.indexOf(1));

// let c = " ";
// if (c != " ") {
//   console.log("running");
// } else {
//   console.log("failed");
// }

// let s = 14;

// if (s != 14) {
//   console.log("okay");
// } else {
//   console.log("eee");
// }

// if (s >= 20 || s == 4) {
//   console.log("running");
// } else if (s < 2 || s != 14) {
//   console.log("okay");
// } else {
//   console.log("End");
// }

// let Admin = "israel";
// let secAdmin = "josh";
// let Username = prompt("What is ur name");

// console.log(Username);

// if (Username.toLowerCase() === Admin) {
//   console.log("Welcome");
// } else if (Username == secAdmin) {
//   console.log("Welcome");
// } else {
//   console.log("Redirect!!");
// }

// let Admin = "israel";

// switch (Admin) {
//   case "israel":
//     console.log("login now ");
//     break;
//   case "josh":
//     console.log("Welcom jodh");
//     break;
//   default:
//     console.log("Go home");
//     break;
// }

const fruits = ["apple", "banana", "mango", "cherry", "paw-paw"];

// fruits.map((item) => {
//   console.log(item);
// });
// console.log(fruits[1]);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let name = "peter";

// let age = 14;

// console.log(`hello ${name} u are  ${age} yrs old`);
// console.log(`hello ` + name " ");

let print = (e) => {
  return console.log(e);
};

// print("Hello");

let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
function handelclick() {
    print(inp.value)
}

btn.addEventListener("click", handelclick)
