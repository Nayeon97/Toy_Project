function loadItems(){
    return fetch('/data.json')
    .then(response=>response.json())
    .then(json=>json.cards);
}

loadItems() 
.then(cards => {
    displayCards(cards);
    // setEventListeners(cards);
})
.catch(console.log)



let board = document.querySelector(".card_board"); 

function displayCards(cards) {
    board.innerHTML = cards.map(card => Make_cardFront(card)).join('');
}

function Make_cardFront(card){
 return `
 <div class="card">
 <div class="card_back"><span>🃏</span></div>
 <div class="card_front">
 <span>${card.img}</span>
 </div>
</div>
 `;
}



