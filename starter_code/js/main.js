console.log("loaded")


// Data Model

var abcBoard = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z"];
var letterBox = ["","","","",""];

var letter = abcBoard[0];

//for(i=0; i<abcBoard.length; i++){
    //console.log(abcBoard[i])
//}

var startGame = function() {
  won = false;
  letterBox = ["","","","",""]
}

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
document.getElementById("letterA").addEventListener("click", getLetter);
document.getElementById("letterB").addEventListener("click", getLetter);
document.getElementById("letterC").addEventListener("click", getLetter);
document.getElementById("letterD").addEventListener("click", getLetter);
document.getElementById("letterE").addEventListener("click", getLetter);
document.getElementById("letterF").addEventListener("click", getLetter);
document.getElementById("letterG").addEventListener("click", getLetter);
document.getElementById("letterH").addEventListener("click", getLetter);
document.getElementById("letterI").addEventListener("click", getLetter);
document.getElementById("letterS").addEventListener("click", getLetter);

function getLetter(evt){
    input = this.innerHTML
    console.log(input);

var word = ["","","",""];
var search = ["F","I","S","H"];

 if (input === search[0]){
  document.getElementById("cell0").innerHTML = input;
  word[0] = input;
}else if (input === search[1]){
    document.getElementById("cell1").innerHTML = input;
  word[1] = input;
}else if (input === search[2]){
    document.getElementById("cell2").innerHTML = input;
  word[2] = input;
}else if (input === search[3]){
   document.getElementById("cell3").innerHTML = input;
  word[3] = input;
}else {
    false;
}
console.log(word)
};
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


// each cell has an assigned letter, which equals the letter thta has
//been assigned to that index of the letterBox.
var renderBoard = function() {
  document.getElementById("cell0").textContent = letterBox[0];
  document.getElementById("cell1").textContent = letterBox[1];
  document.getElementById("cell2").textContent = letterBox[2];
  document.getElementById("cell3").textContent = letterBox[3];
  document.getElementById("cell4").textContent = letterBox[4];
  document.getElementById("cell5").textContent = letterBox[5];
  document.getElementById("cell6").textContent = letterBox[6];
  document.getElementById("cell7").textContent = letterBox[7];
  document.getElementById("cell8").textContent = letterBox[8];
}




