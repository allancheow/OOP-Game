/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.gameEnded = false;
        // Customization for sound        
        this.correctSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3");
        this.wrongSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3");
        this.winSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3");
        this.loseSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3");
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            new Phrase(`A blessing in disguise`),
            new Phrase(`A dime a dozen`),
            new Phrase(`Beat around the bush`),
            new Phrase(`Better late than never`),
            new Phrase(`Bite the bullet`),
            new Phrase(`Break a leg`),
            new Phrase(`Call it a day`),
            new Phrase(`Cut somebody some slack`),
            new Phrase(`Cutting corners`),
            new Phrase(`Easy does it`),
            new Phrase(`Get out of hand`),
            new Phrase(`Get your act together`),
            new Phrase(`Hang in there`),
            new Phrase(`Hit the sack`),
            new Phrase(`It's not rocket science`),
            new Phrase(`Let someone off the hook`),
            new Phrase(`Make a long story short`),
            new Phrase(`Miss the boat`),
            new Phrase(`No pain, no gain`),
            new Phrase(`On the ball`),
            new Phrase(`Pull someone's leg`),
            new Phrase(`Pull yourself together`),
            new Phrase(`So far so good`),
            new Phrase(`Speak of the devil`),
            new Phrase(`That's the last straw`),
            new Phrase(`The best of both worlds`),
            new Phrase(`To get bent out of shape`),
            new Phrase(`To make matters worse`),
            new Phrase(`Under the weather`),
            new Phrase(`You can say that again`),
            new Phrase(`A penny for your thoughts`),
            new Phrase(`A perfect storm`),
            new Phrase(`Add insult to injury`),
            new Phrase(`Barking up the wrong tree`),
            new Phrase(`Break the ice`),
            new Phrase(`Costs an arm and a leg`),
            new Phrase(`Don't cry over spilt milk`),
            new Phrase(`Go on a wild goose chase`),
            new Phrase(`He has bigger fish to fry`),
            new Phrase(`Hit the nail on the head`),
            new Phrase(`Ignorance is bliss`),
            new Phrase(`It takes one to know one`),
            new Phrase(`It's a piece of cake`),
            new Phrase(`Live and learn`),
            new Phrase(`Look before you leap`),
            new Phrase(`On thin ice`),
            new Phrase(`Once in a blue moon`),
            new Phrase(`Play devil's advocate`),
            new Phrase(`Put something on ice`),
            new Phrase(`Spill the beans`),
            new Phrase(`Take a rain check`),
            new Phrase(`The elephant in the room`),
            new Phrase(`The whole nine yards`),
            new Phrase(`A snowball effect`),
            new Phrase(`A storm in a teacup`),
            new Phrase(`As right as rain`),
            new Phrase(`Bolt from the blue`),
            new Phrase(`Burn bridges`),
            new Phrase(`Calm before the storm`),
            new Phrase(`Come rain or shine`),
            new Phrase(`Curiosity killed the cat`),
            new Phrase(`Cut the mustard`),
            new Phrase(`Don't beat a dead horse`),
            new Phrase(`Every dog has his day`),
            new Phrase(`Fit as a fiddle`),
            new Phrase(`Fortune favours the bold`),
            new Phrase(`Get a second wind`),
            new Phrase(`Get wind of something`),
            new Phrase(`Go down in flames`),
            new Phrase(`Haste makes waste`),
            new Phrase(`He's off his rocker`),
            new Phrase(`He's sitting on the fence`),
            new Phrase(`It takes two to tango`),
            new Phrase(`Jump on the bandwagon`),
            new Phrase(`Leave no stone unturned`),
            new Phrase(`Let sleeping dogs lie`),
            new Phrase(`Like riding a bicycle`),
            new Phrase(`Like two peas in a pod`),
            new Phrase(`On cloud nine`),
            new Phrase(`Once bitten, twice shy`),
            new Phrase(`Run like the wind`),
            new Phrase(`Shape up or ship out`),
            new Phrase(`Snowed under`),
            new Phrase(`That ship has sailed`),
            new Phrase(`Through thick and thin`),
            new Phrase(`Time is money`),
            new Phrase(`Waste not, want not`),
            new Phrase(`We see eye to eye`),
            new Phrase(`Weather the storm`),
            new Phrase(`Well begun is half done`),
            new Phrase(`When it rains it pours`)
        ];
        return phrases;
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.querySelector(`#overlay`);
        const answer = document.querySelector(`#answer`);

        overlay.style.display = `none`;
        answer !== null ? answer.remove() : null;
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.correctSound.volume = .4;
        this.wrongSound.volume = .4;
        this.winSound.volume = .8;
        this.loseSound.volume = .4;
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const quoteIndex = Math.floor( Math.random() * this.phrases.length );
        return this.phrases[quoteIndex];
    };
    
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        // Disables selected button
        button.disabled = true;
        if ( this.activePhrase.checkLetter(button.textContent) ) {
            // Update class for correct guess and display on screen
            this.correctSound.play()
            button.className = `chosen`;
            this.activePhrase.showMatchedLetter(button.textContent)
            // Check if all letters are diaplayed for win
            this.checkForWin() ? this.gameOver(this.checkForWin()) : false;
        } else {
            // Update class for wrong guess and remove life
            this.wrongSound.play();
            button.className = `wrong`;
            this.removeLife();
        }
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const hiddenLetter = document.querySelectorAll(`.hide`).length;
        return hiddenLetter === 0 ? true : false;
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const lives = document.querySelector(`.tries img[src='images/liveHeart.png']`);
        lives.src = `images/lostHeart.png`;
        this.missed++;
        return this.missed === 5 ? this.gameOver(false) : false;
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameStatus) {
        const gameOverMsg = document.querySelector(`#game-over-message`);
        const overlay = document.querySelector(`#overlay`);
        // Added correct phrase to be displayed for game lost status
        const answer = document.createElement(`h1`);
        answer.id = `answer`;
        answer.textContent = `The correct answer is, "${this.activePhrase.phrase}"`;

        // Return overlay to display end of game message
        overlay.style.display = `flex`;
        // Sets end of game message on screen
        gameStatus ? (gameOverMsg.textContent = `You've won`, overlay.className = `win`, this.winSound.play())
            : (gameOverMsg.textContent = `Sorry, you've lost. Try again!`, overlay.className = `lose`, overlay.insertBefore(answer, gameOverMsg.nextSibling), this.loseSound.play());
        this.reset();
        // Boolean value to prevent keypress in app.js file   
        this.gameEnded = true;
    };
    
    /**
    * Reset game board to ready next game
    */
    reset() {
        const lis = document.querySelectorAll(`#phrase li`);
        const letters = document.querySelectorAll(`#qwerty button`);
        const lives = document.querySelectorAll(`.tries img[src='images/lostHeart.png']`);
        // Resets missed count
        this.missed = 0;
        // Deletes/removes all <li>'s within phrase <div>
        lis.forEach( li => li.remove() );
        // Resets on screen key board
        letters.forEach( letter => (letter.className = `key`, letter.disabled = false) );
        // Update img src to full Hearts
        lives.forEach( live => live.src = `images/liveHeart.png` );
    }
}