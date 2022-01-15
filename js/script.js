//Game starts by clicking on a start button
//When the user clicks the start button, the timer should reset

//Present a series of blanks that are equal to the number of letters in a randomly selected word that is not displayed by default

const availableWords = ["variable", "modulo", "boolean", "array", "object"];

console.log(availableWords[Math.floor(Math.random() * availableWords.length)]);

//On a key event, capture the entered key 
//If the key entered by the user matches the hidden letter in the word, display that letter

//The game will have a timer that is visible to the user
//When the timer reaches zero, the game is over
//If the word has not been guess before the timer reaches zero, the user loses the game
//There should be a message that the user has lost the game

//If all the letters are correctly guessed, the user wins the game.
//There should be a message that user has won the game

//Totals wins and losses are visible to the user
//When the user refreshes the page, wins and losses should persist