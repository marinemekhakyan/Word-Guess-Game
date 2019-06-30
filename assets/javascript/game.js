let letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

let wins = 0;
    let losses = 0;
    let correctGuesses;
    let wrongGuesses;

    let word = document.getElementById("word");
    let remainingGuesses = document.getElementById("remaining-guesses-text");
    let winsText = document.getElementById("wins-text");
    let lossesText = document.getElementById("losses-text");


    function initializeGame() {
      word = ["A little less conversation", "Valerie", "We are the Champions", "Billie Jean"];

        allowedGuesses = 10;
        wrongGuesses = [];
        correctGuesses = [];

        for (var i = 0; i < word.length; i++) {
             correctGuesses.push('_');
         }
        wordElement.innerHTML = correctGuesses.join(' ');
        letterCountElement.innerHTML = allowedGuesses;
         }
        function updateGuesses(letter) {
           allowedGuesses--; 
          letterCountElement.innerHTML = allowedGuesses;
            
        if (word.indexOf(letter) === -1) { 
           wrongGuesses.push(letter); 
            lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
           } else { 
            for (var i = 0; i < word.length; i++) {
        
        if (word[i] === letter) {
            correctGuesses[i] = letter;
            }
            }
            
        wordElement.innerHTML = correctGuesses.join(' ');
            }
            }

            function checkWin() {
                if (correctGuesses.indexOf('_') === -1) {
                alert('Nice job!');
                } else if (allowedGuesses === 0) {
                alert('You lost!');
                }
                }
        document.onkeyup = function (event) {
                    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
                    updateGuesses(letterGuessed);
                    checkWin();
                    };
                    
                    initializeGame();
    

// Initial Pseudocode

// Choose theme "Legends Gone" and include song names by famous artists who passed.
// Link mp3 files and artist images to play and display once the song is guessed correctly.
// For styling use Bootstrap (Jumbotron, image cards, grid). Also link to style.css file.
// Display text with description, number of guesses, wins
// User needs to guess the name of the song by typing any of the letters in CharCode.
// If the letter typed fits any of the letters in the song name, the letter appears on its corresponding word position.
// Use .push("_") to display underscore instead of the song name when the user is guessing. 
// Use .join(" ") to bring the letters together when the user gets the name of the song right. 
// if the typed letter is not in the current song name, it appears under "Guessed Letters" and the number of allowed guesses gets decremented by 1.
// Wrong guessed letters are not typable anymore. 
// Define the number of times user can type wrong letters. Limit that number to 10 and display the dynamic countdown.
// When the number of allowed guesses reaches 0, the user loses. 
// If the user guesses all letters correctly, the user wins and that song plays until user presses reset/play again.
// When the user guesses the name of the song, the number of wins gets incremented by 1.
// Create variables for guessed letters, counter, win and lose points.
// Song names will be kept in an array.
// Use for loops to loop through the arrays and assign the user choice to either correct or wrong.
// Typed letters will be pulled from CharCode.
// OnKeyUp event function will be used to grab user input and start the game.
// CheckWin function will contain the conditional alerting "Win/Lose"
