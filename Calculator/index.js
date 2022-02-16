'use strict'

const result = document.getElementById('end').innerHTML; // =
const decimal_point = document.getElementById('num_decimal').innerHTML; // 소수점
const display = document.getElementById('calculator_display');
const number = document.getElementsByClassName('num'); // 0-9까지 숫자
const oper = document.getElementsByClassName('operator'); // 연산
const btnAll = document.querySelectorAll('button');

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
        display.innerText = null;
        break;
      case "end":
        display.innerText += i;
          break;
      case "num_decimal":
        display.innerText += btn.target.textContent;
          break;       
    }
  })
});

let array = [];
let num_array = [];
let operator_array = [];
let n = [];
let finish;

function Calculate_array(){
   for(let i=0; i<display.innerText.length; i++){
      array.push(display.innerText[i]);
   }
   return array;
}

function Calculate_result(){
  array.forEach((item, index) => {
    if(isNaN(item) == false || item === ".") {
			 num_array.push(item);
       if(index == array.length-1){
        console.log(index);
        n.push(parseFloat(num_array.join('')));
       }
		} 
    else {
      n.push(parseFloat(num_array.join('')));
      num_array=[];
      operator_array.push(item);
		}    
  });
}

function aaa(){
   if(operator_array[0] == "+"){
     finish = n[0]+n[1];
     console.log(finish);
     n=[];
     operator_array=[];
   }
}


  

