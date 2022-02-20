'use strict'

// const result = document.getElementById('end').innerHTML; // =
// const decimal_point = document.getElementById('num_decimal').innerHTML; // 소수점
const display = document.getElementsByClassName('now_result_text')[0]; // 현재 계산
const before_result = document.getElementsByClassName('before_result_text')[0]; // 이전 계산
// const number = document.getElementsByClassName('num'); // 0-9까지 숫자
// const oper = document.getElementsByClassName('operator'); // 연산
const btnAll = document.querySelectorAll('button');

let num1 = []; // 첫번째 숫자
let operitem = []; // 연산기호
let num2 = []; // 두번째 숫자
let calculate_result = []; // 계산결과

btnAll.forEach(button => {
  button.addEventListener('click', (btn) => {
    switch(btn.target.className || btn.target.id){
      case "num":
      case "num_decimal":
        if(calculate_result.length == 1){
          display.innerText =null;
          display.innerText += btn.target.textContent;
          before_result.innerText = `Ans: ${calculate_result[0]}`;
          calculate_result.length = 0;
          num1.push(btn.target.textContent);
          
        }
        else if(calculate_result.length == 0 && operitem.length == 0){ // 사용자가 기호를 입력했는 경우에는 두번째 숫자.
          display.innerText += btn.target.textContent;
          num1.push(btn.target.textContent);
        }
        else if(calculate_result.length == 0 && operitem.length == 1){
          display.innerText += btn.target.textContent;
          num2.push(btn.target.textContent);
        }
        break;
      case "operator": // 연산자
        display.innerText += btn.target.textContent;
        if(calculate_result.length==1){ // 만약 계산결과값이 있는 상태에서 기호 누르면
          num1 = Number(calculate_result[0]); // 결과값이 num1 값이 된다. 
          calculate_result.length = 0; // finish 초기화
          operitem.push(btn.target.textContent);
        }
        else{
          operitem.push(btn.target.textContent);
          num1 = Number(num1.join('')); 
          // 연산자를 누르면 -> num1에 저장해놓은 값들을 하나로 합쳐서 문자열로 만든다음 -> 숫자로 변환한다.
        }
        break;
      case "end":
          num2 = Number(num2.join('')); 
          pressdown_end();
          reset();
          break;  
      case "clear": // 끝
        display.innerText = null;
        before_result.innerText = null;  
        calculate_result.length = 0;
        break;
    }
  })
});

function pressdown_end(){
  if(operitem[0] == "+"){
    calculate_result.push(num1 + num2);
    display.innerText = calculate_result[0];
    before_result.innerText = `${num1} + ${num2}`;
  }
  if(operitem[0] == "-"){
    calculate_result.push(num1 - num2);
   display.innerText = calculate_result[0];
   before_result.innerText = `${num1} - ${num2}`;
 }
 if(operitem[0] == "×"){
  calculate_result.push(parseFloat((num1 * num2).toFixed(5)));
   display.innerText = calculate_result[0];
   before_result.innerText = `${num1} × ${num2}`;
 }
 if(operitem[0] == "÷"){
   calculate_result.push(parseFloat((num1 / num2).toFixed(5)));
   display.innerText = calculate_result[0];
   before_result.innerText = `${num1} ÷ ${num2}`;
 }
}

function reset(){
  num1 = [];
  num2 = [];
  operitem = [];
}

