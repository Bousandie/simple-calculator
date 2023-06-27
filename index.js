let num1 = 10
let num2 = 4
let num3 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
document.getElementById("num3-el").textContent = num3

let sumEl = document.getElementById("sum-el")
function add(){
    sumEl.textContent = num1 + num2 + num3
}
function subtract(){
    sumEl.textContent = num1 - num2 - num3
}
function divide(){
    sumEl.textContent = num1 / num3 / num3
}
function multiply(){
    sumEl.textContent = num1 * num2 * num3
}