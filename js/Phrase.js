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
            // Used chained ternary operator to set class(es) for each character
            li.textContent === ` ` ? li.className = `space`
                : li.textContent === `'` ? li.className = `letter ${this.phrase[i]}` 
                : li.className = `hide letter ${this.phrase[i]}`;
            ul.appendChild(li);
        }
    }
 }