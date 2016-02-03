  console.log("loaded")


  var word = [];
  var category =[];
  var randomWord = [["F","I","S","H"],["T","I","G","E","R"],["J","A","P","A","N"],["B","A","N","G","K","O","C","K"]];
  var randomCategory = [["ANIMALS"],["CITIES"],["COUNTRIES"]];
  var attempts = 6;
//var abcBoard = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
//"Q","R","S","T","U","V","W","X","Y","Z"];

  document.getElementById("attemptfield").innerHTML = "Attempts: " + attempts;

  createImage = document.createElement('img')
     createImage.src = 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Hangman-0.png'
    document.getElementById('hangmanimage').appendChild(createImage);



  var randomW = function (min, max) {
    return Math.floor(Math.random() * (randomWord.length));
  }
  var currentWord = randomWord[randomW()];


  var randomC = function (min, max) {
    return Math.floor(Math.random() * (randomCategory.length));
  }
    var currentCategory =  randomCategory[randomC()];

    document.getElementById("category").innerHTML = "Category: " + currentCategory;

var randomCW = function(){

var getRW = function (){
 randomWord = [[["F","I","S","H"],["T","I","G","E","R"]],[["B","A","N","G","K","O","C","K"],["S","Y","D","N","E","Y"]],[["J","A","P","A","N"],["P","E","R","U"]]];
  if (randomCategory = randomCategory[0]){
      currentWord = randomWord [0][randomW()]
  }  if (randomCategory = randomCategory[1]){
    currentWord = randomWord [1][randomW()]
  } if (randomCategory = randomCategory[2]){
    currentWord = randomWord [2][randomW()]
  }
}
}






    // Data Model





  //1. Each letter that is selected on the abcBoard will be added to the word array, which will build the final word.
  // I might have to create a separate array for each letter, since they need to be in correct order to build the
  // searchedWord, which with this
  // is not given. --> ["a"]+["b"] = "ab"



  // if the input equals an index of the searched word, the same index of
  // printed word will equal the input.



  //var letter = $("table")
  //selectLetter(letter)


  // depending on which letter you click, the console will print that specific letter.

  for (var i= 0; i<26; i++){
  document.getElementById("letter"+i).addEventListener("click", getLetter);
  }

  function getLetter(evt){
      var input = this.innerHTML
      console.log(input);
      var tellMeIfFound = false;
      var gameOver = false;

  // prints each letter to the correct cell

    for(var i= 0; i<currentWord.length; i++){
      if(input === currentWord[i]){
        document.getElementById("cell"+i).innerHTML = input;
        word[i] = input;
        console.log(word);
        tellMeIfFound = true;
      }
    }
    //for(attempts=9; attempts>=0; attempts--){
    if (!tellMeIfFound) { // checking if it is "not false"
      attempts -= 1;     // if tellMeIfFound is true it will be "not true" - if (tellMeIfFound===false);
    if (attempts<0){
      attempts = 0
      alert("You have already lost!")

    }
  }

    document.getElementById("attemptfield").innerHTML = "Attempts: " + attempts;

  for(var i= 0; i<1; i++){
    document.getElementById('hangmanimage').appendChild(createImage);

    }

//for (var i=6; i>=0; i--)
  if (attempts === 6){
     createImage.src = 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Hangman-0.png'
  }else if (attempts === 5){
     createImage.src = 'https://upload.wikimedia.org/wikipedia/commons/3/30/Hangman-1.png'
  }else if (attempts === 4){
   createImage.src = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Hangman-2.png'
  }else if (attempts === 3){
   createImage.src = 'https://upload.wikimedia.org/wikipedia/commons/9/97/Hangman-3.png'
  }else if (attempts === 2){
   createImage.src = 'https://upload.wikimedia.org/wikipedia/commons/2/27/Hangman-4.png'
  }else if (attempts === 1){
   createImage.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Hangman-5.png'
  }else if (attempts === 0){
   createImage.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Hangman-6.png'
  }
  getWinner()
}



  var getWinner = function(){
  if(word.toString() === currentWord.toString()){
    alert("You Win!");
    startGame();
  } else {
    if (attempts===0){
      startGame();
      alert("You Lose!")

    }
  }
  }

 var startGame = function() {
     won = false;
     randomWord = [];
     randomC();
     randomW();

  }







