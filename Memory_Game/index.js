'use strict'

const $cards = document.querySelectorAll('.card');
const $start = document.querySelector('.start_btn');
const $start_container = document.querySelectorAll('.start_container')[0];
let randomCardnum=[]; // 랜덤으로
let selectCardnum=[]; // 사용자가 선택

//game state
const game_state = {
  score: 0,
  count: 10
}; 

function selectCard (count) {
   // count 갯수만큼 랜덤으로 번호 생성하여 array에 push
   let i=1;
   while(i<count+1){
    setTimeout(()=>{
      let num =  Math.floor(Math.random()*15);
      randomCardnum.push(num);
      $cards[num].classList.add('select'); 
      setTimeout(()=>{
        $cards[num].classList.remove('select');
      },800) 
    },1000*i)
    i++; 
  }
}

function clickCard () {
  $cards.forEach((target, index) => {
      target.addEventListener('click', () => {
        selectCardnum.push(index);
        console.log("Dfdfd");
      })
  }) 
}

function start() {
  selectCard(game_state.count);
  setTimeout(() => {
    if(game_state.count == randomCardnum.length){
      clickCard();
    }
  },1000*game_state.count+2);
} 

start();

