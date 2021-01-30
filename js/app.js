/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Initiate start button to clear overlay and start game
document.querySelector(`#btn__reset`).addEventListener( `click`, e => new Game().startGame() );