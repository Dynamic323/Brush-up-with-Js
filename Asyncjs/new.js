// //Synchronous

// // Define three functions
// function firstTask() {
//   console.log("Task 1 welcome Home page");
// }
// firstTask();

// let secondTask = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isloginSuccesful = true;

//     if (isloginSuccesful) {
//       resolve(`Login in user success`);
//     } else {
//       reject("Error in loging user in ");
//     }
//   }, 3000);
// });

// const thirdTask = () => {
//   console.log("Task 3  WElcome to the Dashboard");
// };

// secondTask
//   .then((response) => {
//     console.log(response);
//     thirdTask();
//   })
//   .catch((err) => {
//     console.warn(err);
//   });

// // Execute the functions
// firstTask();
// secondTask(Showdashboard);

// let myPromise = new Promise((resolve, reject) => {
//   let x = 5;
//   if (x == 0) {
//     resolve("Okay u can pass");
//   } else {
//     reject("No go home");
//   }
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// let myPromise = async () => {
//   let result = fetch("");

//   return await result;
// };

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// TRY AND CATCH
// 🔍 What it does:
// try: Run your code here.
// catch: If there's an error, handle it here.
// finally: Always runs, no matter what.

// try {
//   let result = x + 5;

//   console.log(result);
// } catch (error) {
//   console.log("An error occurred:", error);
// } finally {
//   console.log("This will always run, error or not.");
// }

// let datas = fetch("https://jsonplaceholder.typicode.com/todos");

// datas
//   .then((response) => console.log(response))

// let [data, setdata] = usesa

async function Getdata() {
  let endpoint = "https://jsonplaceholder.typicode.com/todos";

  try {
    let result = await fetch(endpoint);

    // result
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    let data = await result.json();

  } catch (error) {
    console.log(error);
  }""
}

Getdata();

// Dog images api

let btn = document.createElement("button");
let img = document.createElement("img");
let body = document.body;

const getimage = async () => {
  try {
    let result = await fetch("https://api.thedogapi.com/v1/images/search", {
      body: {
        acessToken: "112#1@1!!#@$$#%@#@idfjiewm",
      },
    });

    let data = await result.json();
    let url = data[0].url;

    img.src = url;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

btn.textContent = "Click me to get random Dog image";
btn.addEventListener("click", getimage);
body.append(btn, img);
