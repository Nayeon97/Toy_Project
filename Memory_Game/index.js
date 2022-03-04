'use strict'

const $cards = document.querySelectorAll('.card');
const $start = document.querySelector('.start_btn');
const $start_container = document.querySelectorAll('.start_container')[0];
let randomCardnum=[]; // 랜덤으로
let selectCardnum=[]; // 사용자가 선택
let gamestateCount = 2; // game_state에 있는 count를 3번씩 반복하기 위해!

//game state
const game_state = {
  score: 0,
  count: 2
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
  let length = randomCardnum.length;
  let i=0;
    $cards.forEach((target, index) => {
      target.addEventListener('click', () => {
         let result = resultCardclick(i,index);
         if(result == true){
           console.log("일치함");
           if (i+1 == length) {
              console.log("마지막입니다.");
              document.body.classList.add("sucess");
              setTimeout(()=>{
                document.body.classList.remove("sucess");
              },500)
              gameState();
           }
           i++;
         }
         else {
           // finish -> restart
         }
      })
  })
}

// game_state count 상태관리
function gameState() {
   if (gamestateCount == 2){
      game_state.count ++;
   }
}

function resultCardclick(i,index){
    if(randomCardnum[i] == index){
      return true;
    }
    else{
      return false;
    }
}
  

function start() {
  $start.addEventListener('click', ()=> {
    $start_container.style.display ="none";
    selectCard(game_state.count);
    setTimeout(() => {
    if(game_state.count == randomCardnum.length){
      clickCard();
    }
  },1000*game_state.count+3);
  })
} 

start();

