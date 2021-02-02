/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
         // Selects the <ul> within <div> with id=phrase
        const ul = document.querySelector(`#phrase ul`);
        for ( let i = 0; i < this.phrase.length; i++ ) {
            // Creates new <li> element
            const li = document.createElement(`li`);
            li.textContent = this.phrase[i];
            // Used chained ternary operator to check for letter, space or apostrophe and set appropriate class to each character
            li.textContent === ` ` ? li.className = `space`
                : li.textContent === `'` ? li.className = `show letter ${this.phrase[i]}` 
                : li.className = `hide letter ${this.phrase[i]}`;
            ul.appendChild(li);
        }
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const letters = document.querySelectorAll(`.${letter}`);
        // Update class to show correct guesses
        this.checkLetter(letter) ? letters.forEach( letter => letter.classList.replace(`hide`, `show`) ) : null;
    };
 }