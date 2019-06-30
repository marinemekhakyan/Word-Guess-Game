$(document).ready(function() {
})
 let userChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

let artists;            //Topics
  let chosenArtist;     // Current artist 
  let word;            // Selected word
  let guess;           // Guess
  let guesses = [ ];    // Stored guesses
  let lives;           // Lives
  let counter;         // Count correct guesses
  let space;            // Number of spaces in word '-'

  // Get elements
  let displayLives = document.getElementById("mylives");
  let displayArtist = document.getElementById("disArtist");
    let userChoice = event.key;

    let chosenArtist = function () {
        if (chosenCategory === categories[0]) {
          catagoryName.innerHTML = "Elvis Presley";
        } else if (chosenCategory === categories[1]) {
          catagoryName.innerHTML = "Amy Whinehouse";
        } else if (chosenCategory === categories[2]) {
          catagoryName.innerHTML = "Freddie Mercury"; 
        } else if (chosenCategory === categories[3]) {
            catagoryName.innerHTML = "Michael Jackson";
          }
      }

      result = function () {
        wordBlock = document.getElementById('wordBlock');
        correct = document.createElement('ul');
    
        for (var i = 0; i < word.length; i++) {
          correct.setAttribute('id', 'my-word');
          guess = document.createElement('li');
          guess.setAttribute('class', 'guess');
          if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
          } else {
            guess.innerHTML = "_";
          }
          guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
  comments = function () {
    showLives.innerHTML = lives + " lives left";
    if (lives < 1) {
      showLives.innerHTML = "Try Again!";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "Nice job!";
      }
    }
  }

// OnKeyUp Function
    document.onkeyup = function(event) {
      let guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  

function newFunction() {
    return event.key;
}
