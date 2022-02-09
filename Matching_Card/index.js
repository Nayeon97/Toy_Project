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

let selectedCard = document.getElementsByClassName("card");
let cardB = document.getElementsByClassName("card_back");
let cardF = document.getElementsByClassName("card_front"); //


function openArray(cards){
   a = cards.map(card => card.isOpen);
   return a;
} // isOpen 배열로 받아옴.

function cardOpen(i){
    if (a[i] == "close"){
       console.log(a[i]);
    }
}

function setclickEvent() {
   [...selectedCard].forEach((target ,index) => {
    target.addEventListener("click", (e) => {
        let i = index;
        cardOpen(i);
    })
   });
}

setclickEvent();




