'use strict'

const $cards = document.querySelectorAll('.card');
const $start = document.querySelector('.start_btn');
const $start_container = document.querySelectorAll('.start_container')[0];
console.log($start_container);

$start.addEventListener('click', () => {
   $start_container.style.display = "none";
})





