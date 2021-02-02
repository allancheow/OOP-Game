/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const letters = document.querySelectorAll(`.key`);
const startBtn = document.querySelector(`#btn__reset`);

// Initiate start button to clear overlay and start game
startBtn.addEventListener( `click`, e =>{
    game = new Game();
    game.startGame() 
});

// Cycles through the array to listen for any onscreen click 
letters.forEach( letter => letter.addEventListener( `click`, e => game.handleInteraction(letter)) );

document.addEventListener( `keydown`, e => {
    letters.forEach( letter => letter.textContent === e.key ? game.handleInteraction(letter) : null );
});