let btn = document.getElementById("btn");
let body = document.getElementById("myB");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let div_1 = document.querySelector(".mydiv");
let div_2 = document.querySelector(".sec_div");
let div_3 = document.querySelector(".sec_div3");

const print = (log) => {
  return console.log(log);
};
window.addEventListener("load", () => {
  // const sheets = document.styleSheets;
  // for (let i = 0; i < sheets.length; i++) {
  //   const sheet = sheets[i];

  //   console.log(sheet);
  // }

  //  for(const sheet of document.styleSheets){
  //   try{
  //     for (rul)
  //   }catch(err){

  //   }
  //  }

  for (const sheet of document.styleSheets) {
    // try {
      // const rules = sheet.cssRules;

      // console.log(sheet.cssRules);
    // } catch (err) {
     
    // }
  }
});

const Btn1fn = () => {
  div_1.classList.remove("blue_bg");
};

const Btn2fn = () => {
  div_2.classList.add("red_bg");
};
const Btn3fn = () => {
  div_3.classList.toggle("black_bg");
  div_3.classList.add("Hei");
};

btn.addEventListener("click", Btn1fn);
btn2.addEventListener("click", Btn2fn);
btn3.addEventListener("click", Btn3fn);
