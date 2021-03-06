let selectedCard = document.getElementsByClassName("card");
let cardB = document.getElementsByClassName("card_back");
let cardF = document.getElementsByClassName("card_front"); 
let iconAdd = document.getElementsByClassName("counter")[0];
let A=[]; // card.isOpen
let userSelect = [];
let sucessCnt=0; //μ±κ³΅νμ

function getJson(){
    return fetch('./data.json')
    .then(response=>response.json())
    .then(json=>json.cards);
}

getJson() 
.then(cards => {
    shuffle(cards);
    openArray(cards);
    displayCards(cards);
    setclickEvent();
    reset();
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
 <div class="card_back"><span>π</span></div>
 <div class="card_front">
   <span id=${card.isOpen}>${card.img}</span>
 </div>
</div>
 `;
}

function openArray(cards){ // card.isOpen κ°λ€λ§
  A = cards.map(card => card.isOpen);
   return A;
} // isOpen λ°°μ΄λ‘ λ°μμ΄.

let num =[];
function cardOpen(index){
    if (A[index] == "close"){
        cardB[index].classList.add("turn");
        cardF[index].classList.add("turn");
        A[index]="open"; //isOpen κ° λ°κΏ
        num.push(index);
        userSelect.push(cardF[index]);
    }
 }

 function compare(index){ // μ νν μΉ΄λ λκ° λΉκ΅νκΈ°
    if(userSelect[0].firstElementChild.innerHTML == 
       userSelect[1].firstElementChild.innerHTML){    
       A[num[0]] ="sucess";
       A[num[1]] ="sucess";
       userSelect.length=0;
       num.length=0;
       sucessCnt++;
       console.log(index);
       iconAdd.innerHTML += `<span>π΄</span>`;
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
        if(userSelect.length<2){ // μΉ΄λ λκ°λ₯Ό μ ννμ§ μμμ λ
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



