let letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    let wins = 0;
    let losses = 0;
    let correctGuesses;
    let wrongGuesses;

    // Create variables that hold references to the places in the HTML where we want to display things.
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
    

// $(document).ready(function() {
// })
//  let userChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

// let artists;            //Topics
//   let chosenArtist;     // Current artist 
//   let word;            // Selected word
//   let guess;           // Guess
//   let guesses = [ ];    // Stored guesses
//   let lives;           // Lives
//   let counter;         // Count correct guesses
//   let space;            // Number of spaces in word '-'

//   // Get elements
//   let displayLives = document.getElementById("mylives");
//   let displayArtist = document.getElementById("disArtist");
//     let userChoice = event.key;

//     let chosenArtist = function () {
//         if (chosenCategory === categories[0]) {
//           catagoryName.innerHTML = "Elvis Presley";
//         } else if (chosenCategory === categories[1]) {
//           catagoryName.innerHTML = "Amy Whinehouse";
//         } else if (chosenCategory === categories[2]) {
//           catagoryName.innerHTML = "Freddie Mercury"; 
//         } else if (chosenCategory === categories[3]) {
//             catagoryName.innerHTML = "Michael Jackson";
//           }
//       }

//       result = function () {
//         wordBlock = document.getElementById('wordBlock');
//         correct = document.createElement('ul');
    
//         for (var i = 0; i < word.length; i++) {
//           correct.setAttribute('id', 'my-word');
//           guess = document.createElement('li');
//           guess.setAttribute('class', 'guess');
//           if (word[i] === "-") {
//             guess.innerHTML = "-";
//             space = 1;
//           } else {
//             guess.innerHTML = "_";
//           }
//           guesses.push(guess);
//       wordHolder.appendChild(correct);
//       correct.appendChild(guess);
//     }
//   }

//   // Show lives
//   comments = function () {
//     showLives.innerHTML = lives + " lives left";
//     if (lives < 1) {
//       showLives.innerHTML = "Try Again!";
//     }
//     for (var i = 0; i < guesses.length; i++) {
//       if (counter + space === guesses.length) {
//         showLives.innerHTML = "Nice job!";
//       }
//     }
//   }

// // OnKeyUp Function
//     document.onkeyup = function(event) {
//       guess = (this.innerHTML);
//       this.setAttribute("class", "active");
//       this.onkeyup = null;
//       for (var i = 0; i < word.length; i++) {
//         if (word[i] === guess) {
//           guesses[i].innerHTML = guess;
//           counter += 1;
//         } 
//       }
//       let i = (word.indexOf(guess));
//       if (i === -1) {
//         lives -= 1;
//         comments();
//       } else {
//         comments();
//       }
//     }
  
//   // Play
//   play = function () {
//     categories = [
//         ["A little less conversation"],
//         ["Valerie"],
//         ["We are the Champions"],
//         ["Billie Jean"]
//     ];

//     chosenCategory = categories[Math.floor(Math.random() * categories.length)];
//     word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
//     word = word.replace(/\s/g, "-");
//     console.log(word);
//     buttons();

//     guesses = [ ];
//     lives = 10;
//     counter = 0;
//     space = 0;
//     result();
//     comments();
//     chosenArtist();
//     canvas();
// }
//     play();

//     //Reset

//     document.getElementById('reset').onclick = function() {
//         correct.parentNode.removeChild(correct);
//         letters.parentNode.removeChild(letters);
//         showClue.innerHTML = "";
//         context.clearRect(0, 0, 400, 400);
//         play();
//       }
    