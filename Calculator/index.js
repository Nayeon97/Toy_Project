'use strict'

const result = document.getElementById('end').innerHTML; // =
const decimal_point = document.getElementById('num_decimal').innerHTML; // 소수점
const display = document.getElementsByClassName('now_result_text')[0]; // 현재 계산
const before_result = document.getElementsByClassName('before_result_text')[0]; // 이전 계산
const number = document.getElementsByClassName('num'); // 0-9까지 숫자
const oper = document.getElementsByClassName('operator'); // 연산
const btnAll = document.querySelectorAll('button');

btnAll.forEach(button => {
  button.addEventListener('click', (btn) => {
    switch(btn.target.className || btn.target.id){
      case "num": // 숫자
        if(finish.length==1){
          before_result.innerText = `Ans = ${finish[0]}`;
          display.innerText=null;
          finish.length = 0;
        }
        display.innerText += btn.target.textContent;
        break;
      case "operator": // 연산자
        if(finish.length==1){
          finish.length = 0;
        }
        display.innerText += btn.target.textContent;
        break;
      case "clear": // 끝
        display.innerText = null;
        before_result.innerText = null;  
        finish.length = 0;
        reset();
        break;
      case "end":
          Calculate_array();
          Calculate_result();
          input_display();
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
let nums = [];
let finish = [];
let negative_num = [];

function Calculate_array(){
   for(let i=0; i<display.innerText.length; i++){
      array.push(display.innerText[i]);
   }
   return array;
}

function Calculate_result(){
  array.forEach((item, index) => {
    if (index == 0 && item == "-")
    {
      negative_num.push(item);
    }
    else{
      if(isNaN(item) == false || item === ".")
      {
         num_array.push(item);
         if(index == array.length-1){
          nums.push(parseFloat(num_array.join('')));
         }
      } 
      else
      {
        nums.push(parseFloat(num_array.join('')));
        num_array=[];
        operator_array.push(item);
      }    
    }
  });
}

function input_display(){
  if(negative_num.length == 1){
    console.log(operator_array[0]);
    if(operator_array[0] == "+"){
      finish.push((-1 * nums[0])+nums[1]);
      display.innerText = finish[0];
      reset();
    }
    if(operator_array[0] == "-"){
     finish.push((-1 * nums[0])-nums[1]);
     display.innerText = finish[0];
     reset();
   }
   if(operator_array[0] == "×"){
     finish.push((-1 * nums[0])*nums[1]);
     display.innerText = finish[0];
     reset();
   }
  } 
  else{
    if(operator_array[0] == "+"){
      finish.push(nums[0]+nums[1]);
      display.innerText = finish[0];
      reset();
    }
    if(operator_array[0] == "-"){
     finish.push(nums[0]-nums[1]);
     display.innerText = finish[0];
     reset();
   }
   if(operator_array[0] == "×"){
     finish.push(nums[0]*nums[1]);
     display.innerText = finish[0];
     reset();
   }
   if(operator_array[0] == "÷"){
     finish.push(nums[0]/nums[1]);
     display.innerText = finish[0];
     reset();
   }
  } 
}

function reset() {
  array.length=0;
  num_array.length=0;
  nums.length=0;
  operator_array.length=0;
  negative_num.length = 0
}
  

