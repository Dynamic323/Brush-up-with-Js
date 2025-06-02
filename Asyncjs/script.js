//Synchronous





let myPromise = new Promise((resolve, reject) => {
 setTimeout(() => {
  resolve({name:"John"})
 }, 3000);
});

myPromise.then((data) => {

  console.log(data);

  console.log("Hola");
  
})
















// Define three functions
function firstTask() {
  console.log("Task 1");
}

function secondTask() {
  console.log("Task 2");
}

function thirdTask() {
  console.log("Task 3");
}

// Execute the functions
firstTask();
secondTask();
thirdTask();

console.log("Start loop");

for (let i = 0; i < 15; i++) {
  console.log("Number:", i);
}

console.log("Loop finished");

// Asynchronous

function firstTask() {
  console.log("Task 1");
}

function secondTask(callback) {
  setTimeout(() => {
    console.log("Task 2");

    callback();
  }, 2000);
}

function thirdTask() {
  console.log("Task 3");
}



firstTask()
secondTask(thirdTask)

// TRY AND CATCH
// 🔍 What it does:
// try: Run your code here.
// catch: If there's an error, handle it here.
// finally: Always runs, no matter what.

// try {
//   let result = x + 5; // x is not defined!
// } catch (error) {
//   console.log("An error occurred:", error.message);
// } finally {
//   console.log("This will always run, error or not.");
// }
