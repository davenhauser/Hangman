console.log("loaded")


var word = [];
var category =[];
var randomWord = [["F","I","S","H"],["T","I","G","E","R"],["B","E","A","R"],["B","A","N","G","K","O","C","K"]];
var randomCategory = [["ANIMALS"],["CITIES"],["COUNTRIES"]];
var attempts = 9;


var startGame = function() {
  won = false;
  randomWord = [];
  randomC();
  randomW();

}

var randomW = function (min, max) {
  return Math.floor(Math.random() * (randomWord.length - 0));
}
var currentWord = randomWord[randomW()];


var randomC = function (min, max) {
  return Math.floor(Math.random() * (randomCategory.length - 0));
}
  var currentCategory =  randomCategory[randomC()];

  document.getElementById("category").innerHTML = currentCategory;
  // Data Model

var abcBoard = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z"];
var letterBox = ["","","","",""];

var letter = abcBoard[0];

//for(i=0; i<abcBoard.length; i++){
    //console.log(abcBoard[i])
//}



// Each move a certain letter is set into the letterBox
var move = function(cellIndex){
  letterBox[cellIndex] = currentLetter;
}


// there is only one option to win. Find the right word.

var gameWon = function(){
  if (letterBox = searchedWord){
    return true;
  } else {
    return false;
  }
};
//1. Each letter that is selected on the abcBoard will be added to the word array, which will build the final word.
// I might have to create a separate array for each letter, since they need to be in correct order to build the
// searchedWord, which with this
// is not given. --> ["a"]+["b"] = "ab"

//var addLetter = function(letter){
//word.push(letter)
//console.log(word)
//}

// if the input equals an index of the searched word, the same index of
// printed word will equal the input.



//var letter = $("table")
//selectLetter(letter)


//if you click on table, it pushes it into empty array

//When I click on a certain letter in the letterBox, it will be
//pushed into the empty array of the cell.
//document.getElementById("a").innerHTML = abcBoard[0];
//document.getElementById("b").innerHTML = abcBoard[1];
//document.getElementById("c").innerHTML = abcBoard[2];
//document.getElementById("d").innerHTML = abcBoard[3];

//document.getElementById("a").innerHTML = abcBoard[0];
//document.getElementById("b").innerHTML = abcBoard[1];
//document.getElementById("c").innerHTML = abcBoard[2];
//document.getElementById("d").innerHTML = abcBoard[3];

//var squareA = document.getElementById("a")
//squareA.innterHTML = "a"
//var squareB = document.getElementById("b")
//squareA.innterHTML = "b"
//var squareC = document.getElementById("c")
//squareA.innterHTML = "c"
//var squareD = document.getElementById("d")
//squareA.innterHTML = "d"


// depending on which letter you click, the console will print that specific letter.

for (var i= 0; i<26; i++){
document.getElementById("letter"+i).addEventListener("click", getLetter);
}

function getLetter(evt){
    var input = this.innerHTML
    console.log(input);
    var tellMeIfFound = false;


// prints each letter to the correct cell

  for(var i= 0; i<currentWord.length; i++){
    if(input === currentWord[i]){
      document.getElementById("cell"+i).innerHTML = input;
      word[i] = input;
      console.log(word);
      tellMeIfFound = true;
    }
  }
  if (!tellMeIfFound) { // checking if it is "not false"
    attempts -= 1;      // if tellMeIfFound is true it will be "not true" - if (tellMeIfFound===false);
  }

// } else if (input !== currentWord[i]){
//   attempts = attempts - 1;



//   createImage = document.createElement('img')
//   createImage.src = 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Hangman-0.png'
//   document.getElementById('hangmanimage').appendChild(createImage);
//   }


getWinner();
};

var getWinner = function(){
if(word.toString() == currentWord.toString()){
  alert("You Win!");
  startGame();
}
}


//word.push(squareD.innerHTML)

//document.getElementById("a").addEventListener("click", getLetter);
//document.getElementById("b").addEventListener("click", getLetter);
//document.getElementById("c").addEventListener("click", getLetter);
//document.getElementById("d").addEventListener("click", getLetter);

//function getLetter(number) {

//return document.getElementById("box"+number).innerHTML= input;

//}
//function getLetter() {

//document.getElementById("cell0").innerHTML= abcBoard[0];

//}






