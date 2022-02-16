'use strict'

const result = document.getElementById('end').innerHTML; // =
const decimal_point = document.getElementById('num_decimal').innerHTML; // 소수점
const display = document.getElementById('calculator_display');
const number = document.getElementsByClassName('num'); // 0-9까지 숫자
const oper = document.getElementsByClassName('operator'); // 연산
const btnAll = document.querySelectorAll('button');

let num1 = [];
let num2 = [];

btnAll.forEach(button => {
  button.addEventListener('click', (btn) => {
    switch(btn.target.className || btn.target.id){
      case "num":
        display.innerText += btn.target.textContent;
        break;
      case "operator":
        display.innerText += btn.target.textContent;
        break;
      case "clear":
        display.innerText = "";
        break;
      case "end":
        display.innerText += i;
          break;
      case "num_decimal":
        display.innerText += i;
          break;       
    }
  })
});
