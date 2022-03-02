'use strict'

const $cards = document.querySelectorAll('.card');
const $start = document.querySelector('.start_btn');
const $start_container = document.querySelectorAll('.start_container')[0];
let randomCardnum=[]; // 랜덤으로
let selectCardnum=[]; // 사용자가 선택

//game state
const game_state = {
  score: 0,
  count: 3
}; 


// 사용자에게 보여 카드를 보여주는 시간
function delayTime(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function selectCard (count) {
   // count 갯수만큼 랜덤으로 번호 생성하여 array에 push
   for(let i=1; i<count+1; i++){
     let num =  Math.floor(Math.random()*15);
     randomCardnum.push(num);
     console.log(num);
     $cards[num].classList.add('select'); 
     await delayTime(700);
     $cards[num].classList.remove('select'); 
     await delayTime(700);
   }
}
// 시작버튼을 누른다!
async function start(){
  $start.addEventListener('click', () => {
  $start_container.style.display = "none"; 
  selectCard(game_state.count);
  let num = 0;
  while(num < randomCardnum){
    $cards.forEach((target, index) => {
      target.addEventListener('click', () => {
         randomCardnum[num] == index ? console.log("참입니다.") : console.log("거짓입니다.");
      })
   })
   num ++;
  }
})
}



start();

