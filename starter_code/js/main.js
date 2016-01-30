console.log("loaded")


var abcBoard = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","p",
"Q","R","S","T","U","V","W","Q","Y","Z"];
var letterBox = [];
var word = [];
var searchedWord = ["f","i","s","h"];
var letter = abcBoard[0];

//1. Each letter that is selected on the abcBoard will be added to the word array, which will build the final word.
// I might have to create a separate array for each letter, since they need to be in correct order to build the
// searchedWord, which with this
// is not given. --> ["a"]+["b"] = "ab"
var addLetter = function(letter){

word.push(letter)

console.log(word)
}

//var letter = $("table")
//selectLetter(letter)


//if you click on table, it pushes it into emprt array

//2. When I click on a certain letter in the letterBox, it will be
//pushed into the empty array of the cell.

document.getElementById("a").addEventListener("click", selectLetter);

function selectLetter() {
document.getElementById("cell0").innerHTML= letter;
}



