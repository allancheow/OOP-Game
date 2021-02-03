/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();
const letters = document.querySelectorAll(`.key`);
const startBtn = document.querySelector(`#btn__reset`);

// Initiate start button to clear overlay and start game
startBtn.addEventListener( `click`, e =>{
    game = new Game();
    game.startGame() 
});

// Cycles through the array to listen for any onscreen click 
letters.forEach( letter => letter.addEventListener( `click`, e => game.handleInteraction(letter)) );

// Keydown listener for any manual key entry
document.addEventListener( `keydown`, e => {
    // Looks for boolean value to enable keyboard entry during game play
    !game.gameEnded ? letters.forEach( letter => letter.textContent === e.key.toLowerCase() ? game.handleInteraction(letter) : null ) : null;
});