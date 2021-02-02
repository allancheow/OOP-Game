/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.gameEnded = false;
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
            new Phrase(`Get something out of your system`),
            new Phrase(`Get your act together`),
            new Phrase(`Give someone the benefit of the doubt`),
            new Phrase(`Go back to the drawing board`),
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
            new Phrase(`Time flies when you're having fun`),
            new Phrase(`To get bent out of shape`),
            new Phrase(`To make matters worse`),
            new Phrase(`Under the weather`),
            new Phrase(`We'll cross that bridge when we come to it`),
            new Phrase(`Wrap your head around something`),
            new Phrase(`You can say that again`),
            new Phrase(`Your guess is as good as mine`),
            new Phrase(`A bird in the hand is worth two in the bush`),
            new Phrase(`A penny for your thoughts`),
            new Phrase(`A penny saved is a penny earned`),
            new Phrase(`A perfect storm`),
            new Phrase(`A picture is worth a thousand words`),
            new Phrase(`Actions speak louder than words`),
            new Phrase(`Add insult to injury`),
            new Phrase(`Barking up the wrong tree`),
            new Phrase(`Birds of a feather flock together`),
            new Phrase(`Bite off more than you can chew`),
            new Phrase(`Break the ice`),
            new Phrase(`By the skin of your teeth`),
            new Phrase(`Comparing apples to oranges`),
            new Phrase(`Costs an arm and a leg`),
            new Phrase(`Do something at the drop of a hat`),
            new Phrase(`Do unto others as you would have them do unto you`),
            new Phrase(`Don't count your chickens before they hatch`),
            new Phrase(`Don't cry over spilt milk`),
            new Phrase(`Don't give up your day job`),
            new Phrase(`Don't put all your eggs in one basket`),
            new Phrase(`Every cloud has a silver lining`),
            new Phrase(`Get a taste of your own medicine`),
            new Phrase(`Give someone the cold shoulder`),
            new Phrase(`Go on a wild goose chase`),
            new Phrase(`Good things come to those who wait`),
            new Phrase(`He has bigger fish to fry`),
            new Phrase(`He's a chip off the old block`),
            new Phrase(`Hit the nail on the head`),
            new Phrase(`Ignorance is bliss`),
            new Phrase(`It ain't over till the fat lady sings`),
            new Phrase(`It takes one to know one`),
            new Phrase(`It's a piece of cake`),
            new Phrase(`It's raining cats and dogs`),
            new Phrase(`Kill two birds with one stone`),
            new Phrase(`Let the cat out of the bag`),
            new Phrase(`Live and learn`),
            new Phrase(`Look before you leap`),
            new Phrase(`On thin ice`),
            new Phrase(`Once in a blue moon`),
            new Phrase(`Play devil's advocate`),
            new Phrase(`Put something on ice`),
            new Phrase(`Rain on someone's parade`),
            new Phrase(`Saving for a rainy day`),
            new Phrase(`Slow and steady wins the race`),
            new Phrase(`Spill the beans`),
            new Phrase(`Take a rain check`),
            new Phrase(`Take it with a grain of salt`),
            new Phrase(`The ball is in your court`),
            new Phrase(`The best thing since sliced bread`),
            new Phrase(`The devil is in the details`),
            new Phrase(`The early bird gets the worm`),
            new Phrase(`The elephant in the room`),
            new Phrase(`The whole nine yards`),
            new Phrase(`There are other fish in the sea`),
            new Phrase(`There's a method to his madness`),
            new Phrase(`There's no such thing as a free lunch`),
            new Phrase(`Throw caution to the wind`),
            new Phrase(`You can't have your cake and eat it too`),
            new Phrase(`You can't judge a book by its cover`),
            new Phrase(`A little learning is a dangerous thing`),
            new Phrase(`A snowball effect`),
            new Phrase(`A snowball's chance in hell`),
            new Phrase(`A stitch in time saves nine`),
            new Phrase(`A storm in a teacup`),
            new Phrase(`An apple a day keeps the doctor away`),
            new Phrase(`An ounce of prevention is worth a pound of cure`),
            new Phrase(`As right as rain`),
            new Phrase(`Bolt from the blue`),
            new Phrase(`Burn bridges`),
            new Phrase(`Calm before the storm`),
            new Phrase(`Come rain or shine`),
            new Phrase(`Curiosity killed the cat`),
            new Phrase(`Cut the mustard`),
            new Phrase(`Don't beat a dead horse`),
            new Phrase(`Every dog has his day`),
            new Phrase(`Familiarity breeds contempt`),
            new Phrase(`Fit as a fiddle`),
            new Phrase(`Fortune favours the bold`),
            new Phrase(`Get a second wind`),
            new Phrase(`Get wind of something`),
            new Phrase(`Go down in flames`),
            new Phrase(`Haste makes waste`),
            new Phrase(`Have your head in the clouds`),
            new Phrase(`He who laughs last laughs loudest`),
            new Phrase(`Hear something straight from the horse's mouth`),
            new Phrase(`He's not playing with a full deck`),
            new Phrase(`He's off his rocker`),
            new Phrase(`He's sitting on the fence`),
            new Phrase(`It is a poor workman who blames his tools`),
            new Phrase(`It is always darkest before the dawn`),
            new Phrase(`It takes two to tango`),
            new Phrase(`Jump on the bandwagon`),
            new Phrase(`Know which way the wind is blowing`),
            new Phrase(`Leave no stone unturned`),
            new Phrase(`Let sleeping dogs lie`),
            new Phrase(`Like riding a bicycle`),
            new Phrase(`Like two peas in a pod`),
            new Phrase(`Make hay while the sun shines`),
            new Phrase(`On cloud nine`),
            new Phrase(`Once bitten, twice shy`),
            new Phrase(`Out of the frying pan and into the fire`),
            new Phrase(`Run like the wind`),
            new Phrase(`Shape up or ship out`),
            new Phrase(`Snowed under`),
            new Phrase(`That ship has sailed`),
            new Phrase(`The pot calling the kettle black`),
            new Phrase(`There are clouds on the horizon`),
            new Phrase(`Those who live in glass houses shouldn't throw stones`),
            new Phrase(`Through thick and thin`),
            new Phrase(`Time is money`),
            new Phrase(`Waste not, want not`),
            new Phrase(`We see eye to eye`),
            new Phrase(`Weather the storm`),
            new Phrase(`Well begun is half done`),
            new Phrase(`When it rains it pours`),
            new Phrase(`You can catch more flies with honey than you can with vinegar`),
            new Phrase(`You can lead a horse to water, but you can't make him drink`),
            new Phrase(`You can't make an omelet without breaking some eggs`)
        ];
        return phrases;
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.querySelector(`#overlay`);
        overlay.style.display = `none`;
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
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
            button.className = `chosen`;
            this.activePhrase.showMatchedLetter(button.textContent)
            // Check if all letters are diaplayed for win
            this.checkForWin() ? this.gameOver(this.checkForWin()) : false;
        } else {
            // Update class for wrong guess and remove life
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
        // Return overlay to display end of game message
        overlay.style.display = `flex`;
        // Sets end of game message on screen
        gameStatus ? (gameOverMsg.textContent = `You've won`, overlay.className = `win`)
            : (gameOverMsg.textContent = `Sorry, you've lost. try again!`, overlay.className = `lose`);
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