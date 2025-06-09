export function Solver(num1, num2) {
  return num1 + num2;
}



let h1 = document.createElement("h1")


function createElement(selector, attr , children) {
  return {
    selector:document.createElement(`${selector}`),
    attr:attr,
    content : children
  }
}