$(document).ready(function() {

let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

})

let artists;            //Topics
  let chosenArtist;     // Current artist (computer random choice)
  let word ;            // Selected word
  let guess ;           // Guess
  let guesses = [ ];    // Stored guesses
  let lives ;           // Lives
  let counter ;         // Count correct geusses
  let space;            // Number of spaces in word '-'

  // Get elements
  let displayLives = document.getElementById("mylives");
  let displayArtist = document.getElementById("disArtist");