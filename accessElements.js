let playerNumber= 0;
let switchPlayerNumber =0;
let currentRound =1;

const buttonOne = document.getElementById('button1');
const buttonTwo = document.getElementById('button2');

const confirmedButton = document.getElementById('Confirm-button');
const gameStart = document.getElementById('new-Start-button');

const formSumbission = document.getElementById('form-submission');
const overlayBackground = document.getElementById('overlay-background');
const nameField = document.getElementById('name-field');

const cancleButton = document.getElementById('cancle-button');
const formEvent = document.querySelector('form');
const errorMessage = document.getElementById('errorMessage');

const canclePlayer =document.getElementById('player-1');
const canclePlayer2 =document.getElementById('player-2');

const gamePlate = document.getElementById('game-plate');
const wonId = document.getElementById('won-game');
const winnerName = document.getElementById('winner-id');

const gamePlateAll = document.querySelectorAll('#game-palteAll li');
 const gamePlate1 = document.getElementById('game-palteAll');

buttonOne.addEventListener('click',openInputForm);
buttonTwo.addEventListener('click',openInputForm);
cancleButton.addEventListener('click',cancleForm);
formEvent.addEventListener('submit',saveForm);

gameStart.addEventListener('click',startnewgame);

/*for (const key of gamePlateAll){
    key.addEventListener('click',randomSymbols);

}*/

const changePlayerName = document.getElementById('changePlayer');

gamePlate1.addEventListener('click',randomSymbols);



