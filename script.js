// let
// const
// var

// {
//   let Name = "Israel";
//   console.log(Name);
// }

// if (true) {
//   var Name = "Israel";
// }
//   console.log(Name);

// function User() {
//   var Name = "Israel";
// }

// console.log(Name);
// User()

// var userName = "Israel Joel";

// console.log(userName);

// var userName = "Max";
// console.log(userName);

// let couter = "1";
// couter = "2";

// Data types in Js
// string "" '' ``

// let myname = "israel"
// let myname = 'israel'
let myname = `israel`;

// Number
let age = 25;

// Boolean
// let isAdmin = true;

// part that login user

// if (isAdmin == true) {
//   console.log("You can enter");
// }

// Array
// let colors = ["green", "cars", "gold"];

// console.log(colors[1][1]);

// Object
let userinfo = {
  Name: "Daniel",
  Password: "12we#4@@",
  isAdmin: true,
  info: ["max", "john"],
  personality: {
    skin_color: "dark",
    city: "benin",
  },
};

const facebookData = {
  platformName: "Facebook",
  headquarters: {
    country: "United States",
    city: "Menlo Park",
    address: {
      street: "1 Hacker Way",
      zipCode: "94025",
    },
  },
  users: [
    {
      userId: 101,
      profile: {
        firstName: "Mark",
        lastName: "Zuckerberg",
        age: 39,
        hobbies: ["coding", "running", "reading"],
        posts: [
          {
            postId: 201,
            content: "Excited about the future of AI!",
            likes: 12000,
            comments: [
              { commentId: 301, commenter: "Elon Musk", text: "Amazing work!" },
              {
                commentId: 302,
                commenter: "Bill Gates",
                text: "Looking forward to it!",
              },
            ],
          },
          {
            postId: 202,
            content: "Just finished my morning run!",
            likes: 8000,
            comments: [
              {
                commentId: 303,
                commenter: "Sheryl Sandberg",
                text: "Great job, Mark!",
              },
            ],
          },
        ],
      },
    },
    {
      userId: 102,
      profile: {
        firstName: "Sheryl",
        lastName: "Sandberg",
        age: 54,
        hobbies: ["mentoring", "traveling", "writing"],
        posts: [
          {
            postId: 203,
            content: "Leadership is about empowering others.",
            likes: 15000,
            comments: [
              {
                commentId: 304,
                commenter: "Mark Zuckerberg",
                text: "Well said, Sheryl!",
              },
              {
                commentId: 305,
                commenter: "Jeff Bezos",
                text: "Couldn't agree more!",
              },
            ],
          },
        ],
      },
    },
  ],
  CEO: {
    firstName: "Mark",
    lastName: "Zuckerberg",
    yearsAtFacebook: 19,
  },
};

/**
   * Questions:
   * 1. What is the name of the platform? 
   *
   * 2. Which city is Facebook's headquarters located in? 
   *
   * 3. What is the zip code of Facebook's headquarters? 
    
   * 4. What is Mark Zuckerberg's first hobby? 
   *
   * 5. What is the content of Mark Zuckerberg's first post? 
   *
   * 6. How many likes does Sheryl Sandberg's first post have? 
   *
   * 7. What is the name of the commenter who commented "Amazing work!" on Mark's first post? 
   *
   * 8. What is the last name of Facebook's CEO? 
   *
   * 9. How many years has Mark Zuckerberg been at Facebook? 
   *
   * 10. Add the number of likes from Mark Zuckerberg's two posts. 
   *
   * 11. Who commented on Sheryl Sandberg's post with "Couldn't agree more!"? 
   */

// console.log(userinfo.Name);

// console.log(userinfo.info);

// console.log(userinfo.personality.city);

// JavaScript By DycoerX

// function Checker() {
//   if (2 !== "2") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(Checker());

// let userAge = 11;

// if (userAge == 12) {
//   console.log("okay you can enter");
// } else if (userAge == 13) {
//   console.log("OKay enter");
// } else if (userAge == 14) {
//   console.log("Hmmmmm enter");
// }else {
//   console.log("Go home ");
// }

// let x = 7;
// let y = 2;
// let res = x % y;
// console.log(x % y);

// if

// Create a program that accepts a score between 0 and 100 from  a promt message .
// Use comparison operators to check if the score falls within different ranges:
// 90-100: "A"
// 80-89: "B"
// 70-79: "C"
// 60-69: "D"
// 50-59: "E"
// 0-49: "F"

// Comparison operators

// let x = 13;
// let y = 13;

// if (x >= y) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// alert("Hello world!")
// let userName = prompt("What's ur name ?")

// console.log(userName);

// let userAge = prompt("How old are you");

// if (userAge < 18) {
//   console.log("Go home u can't enter");
// } else {
//   console.log("You can enter");
// }

// let A = 12;
// let B = 10;

// if (A == 12 && B == 10) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let isValid = true;

// if (!isValid) {
//   console.log("You are valid ");
// } else {
//   console.log("You are not valid");
// }

// let isAdmin = 12;

// if (isAdmin) {
//   console.log("Cool");
// } else {
//   console.log("Not cool");
// }

// // Ternary operator

// isAdmin ? console.log("cool") : console.log("Not cool");

// string concatiination

// let number = prompt("Enter a number from 1 to 30");

// if (number < 1 || number > 30) {
//   alert("Error invalid number");
// }

// let result = number % 2;

// if (result == 0) {
//   console.log("Even number");
// }

// if (result == 1) {
//   console.log("Odd number");
// }

// let Num = 3;

// switch (Num) {
//   case 4:
//     console.log("NUmber is 4");

//     break;
//   default:
//     console.log("Invalid");

//     break;
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// let Name = "Max"
// let Age= 11
// let gender = "male"

// console.log("Hello ${Name}");
// let msg = "hello ${} you are ${}"
// console.log(`Hello ${Name} you are ${age} yrs old`);

// let users = ["Max", "peter", "john", "israel", "josh"];

// users.map(function (){

// })

// users.map((item) => {
//   console.log(`Hello ${item}  you are welcome`);
// });

// let post_content = document.getElementById("post_content");

// const post = {
//   Heading: "How to make money online",
//   content:
//     "Enim eveniet sunt dolorum corrupti eum dolores expedita tenetur similique",
//   views: 20,
//   likes: [
//     {
//       name: " Dy",
//       reaction: 1,
//     },
//     {
//       name: "Pter",
//       reaction: 2,
//     },
//     {
//       name: " Daniel",
//       reaction: 3,
//     },
//   ],
// };

// const msg = `
//   <h1>${post.Heading} <h1/>
//   <p> ${post.content} <p/>

//   ${post.likes.map(() => {
//     "";
//   })}
// `;

// post_content.innerHTML = msg;

// users.map)

// function Dosmth(msg) {
//   console.log(msg);
// }

// const Dosmth = (worker) =>{
//   console.log(msg);
// }

// Dosmth("Hello User you are welcome");

// const Dosmthh = ()

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users.length);

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// function Add(r) {
//   console.log(r + 1);
// }

// Add(3)

function Cal(x, y) {
  let result = x + y;
}

Cal(3, 3);

// let x = "Dynamic"

// let y = " James"

// console.log(x + y);

// const prmt = prompt("Enter not more that two numbers and see the magic");

// if (prmt.length !== 2) {
//   alert("Invalid Must be two numbers");
// } else {
//   function Checker(prmt) {
//     let splited = prmt;
//     let x = +splited[0];
//     let y = +splited[1];

//     console.log(x + y);
//   }

//   Checker(prmt);
// }

// function operate(num, operator, num2) {

//   if (!operator || !num || !num2) {
//     return;
//   } else {
//     let res;
//     if (operator == "+") {
//       res = num + num2;
//       console.log(res);
//     } else if (operator == "-") {
//       res = num - num2;

//       console.log(res);
//     }
//   }
// }

// operate(4, "-" , 1)

// let string = [12, 12, 34, 43];

// function Highest(ary) {
//   const splited = ary.split(",");
// }

// Highest(string);

// let m = "abcdef";
// console.log();

// function solution(str) {
//   let splited = str.splice(",");

//   console.log(splited);
// }

// solution("abcdef");

// let x = "Admin";

// if (x == "User") {
//   console.log("Hello user u are welcome");
// } else {
//   console.log("Go home");
// }



