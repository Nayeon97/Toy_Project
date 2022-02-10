let selectedCard = document.getElementsByClassName("card");
let cardB = document.getElementsByClassName("card_back");
let cardF = document.getElementsByClassName("card_front"); 
let iconAdd = document.getElementsByClassName("counter")[0];
let A=[]; // card.isOpen
let userSelect = [];
let sucessCnt=0; //성공횟수

function getJson(){
    return fetch('/data.json')
    .then(response=>response.json())
    .then(json=>json.cards);
}

getJson() 
.then(cards => {
    shuffle(cards);
    openArray(cards);
    displayCards(cards);
    setclickEvent();
})
.catch(console.log)

let board = document.querySelector(".card_board"); 

function shuffle(cards){
    let cardShuffle = cards.sort(() => Math.random() - 0.5);
    return cardShuffle;
}

function displayCards(cards) {
    board.innerHTML = cards.map(card => Make(card)).join('');
}

function Make(card){
 return `
 <div class="card">
 <div class="card_back"><span>🃏</span></div>
 <div class="card_front">
   <span id=${card.isOpen}>${card.img}</span>
 </div>
</div>
 `;
}

function openArray(cards){ // card.isOpen 값들만
  A = cards.map(card => card.isOpen);
   return A;
} // isOpen 배열로 받아옴.

let num =[];
function cardOpen(index){
    if (A[index] == "close"){
        cardB[index].classList.add("turn");
        cardF[index].classList.add("turn");
        A[index]="open"; //isOpen 값 바꿈
        num.push(index);
        userSelect.push(cardF[index]);
    }
 }

 function compare(index){ // 선택한 카드 두개 비교하기
    if(userSelect[0].firstElementChild.innerHTML == 
       userSelect[1].firstElementChild.innerHTML){    
       A[num[0]] ="sucess";
       A[num[1]] ="sucess";
       userSelect.length=0;
       num.length=0;
       sucessCnt++;
       console.log(index);
       iconAdd.innerHTML += `<span>🍴</span>`;
   }
   else{
       for(let i=0; i<A.length; i++){
           if(A[i] == "open"){
               cardB[i].classList.remove("turn");
               cardF[i].classList.remove("turn");
               A[i]="close";
           }
       }
       userSelect.length=0;
       num.length=0;
      }
   }

function setclickEvent() {
   [...selectedCard].forEach((target ,index) => {
    target.addEventListener("click", (e) => {
        if(userSelect.length<2){ // 카드 두개를 선택하지 않았을 때
            cardOpen(index);
        }
        setTimeout(()=>{
            if(userSelect.length==2){
                compare(index, index);
            }
        },2000)
    })
   });
}

setclickEvent();




