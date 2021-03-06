console.log("loaded")
var word = [];
var currentWord;
var randomWord;
var randomCategory;
var categories = ["ANIMALS","CITIES","COUNTRIES","RIVERS"];
var attempts;
var createImage;
var $resetButton = $("#button")
var button;

// Functions to return a random category and word

var randomC = function () {
  return categories[Math.floor(Math.random() * (categories.length))];
}

var randomNum = function (max) {
  return Math.floor(Math.random() * max);
}

// Every word is an array for itself and is contained within an array
// that represents a category which is contained in yet another array.

var getRW = function (){
  randomWord = [[["S","H","A","R","K"],["T","I","G","E","R"],["P","E","N","G","U","I","N"],
  ["A","N","A","C","O","N","D","A"],["P","L","A","T","Y","P","U","S"]],
  [["B","A","N","G","K","O","K"],["S","Y","D","N","E","Y"],["H","O","U","S","T","O","N"],
  ["M","A","R","R","A","K","E","S","H"],["G","U","A","D","A","L","A","J","A","R","A"]],
  [["J","A","P","A","N"],["P","E","R","U"],["K","E","N","Y","A"],["E","G","Y","P","T"],
  ["I","R","E","L","A","N","D"]],
  [["T","H","A","M","E","S"],["R","H","O","N","E"],["N","I","L","E"],["A","M","A","Z","O","N"],
  ["M","I","S","S","I","S","S","I","P","P","I"]]];
  console.log(randomWord[0]);

// Assigning words to categories.

  if (randomCategory === categories[0]){
    currentWord = randomWord[0][randomNum(randomWord[0].length)];
  } else if (randomCategory === categories[1]){
    currentWord = randomWord[1][randomNum(randomWord[1].length)];
  } else if (randomCategory === categories[2]){
    currentWord = randomWord[2][randomNum(randomWord[2].length)];
  } else {
    currentWord = randomWord[3][randomNum(randomWord[3].length)];
  }
}

// depending on which letter you click, the console will print that specific letter.

for (var i= 0; i<26; i++){
  $("#letter"+i).on("click", getLetter);

}

// Each letter on which you click, will return that same letter.
function getLetter(evt){
  var input = this.innerHTML;
  $(this).css('visibility', 'hidden');
  console.log(input);
  var clickSound = new Audio("sounds/clicksound.mp3")
  clickSound.play();
  var tellMeIfFound = false;
  var gameOver = false;

// print each letter to the correct cell

  for(var i= 0; i<currentWord.length; i++){
    if(input === currentWord[i]){
      var $el = $("#cell"+i);
      $el.html(input);
      $($el).addClass('no-border');
      word[i] = input;
      console.log(word);
      tellMeIfFound = true;
    }
  }

  if (!tellMeIfFound) { // if (tellMeIfFound===false);
    attempts -= 1;
    if (attempts<0){
      attempts = 0
      alert("No cheating! You have already lost!");
      window.location = window.location;
    }
  }

//Changing the image of the hangman depending on number to attempts

  if (attempts === 6){
     $createImage.attr("src",'https://upload.wikimedia.org/wikipedia/commons/8/8b/Hangman-0.png');
  }else if (attempts === 5){
     $createImage.attr("src",'https://upload.wikimedia.org/wikipedia/commons/3/30/Hangman-1.png');
  }else if (attempts === 4){
    $createImage.attr("src", 'https://upload.wikimedia.org/wikipedia/commons/7/70/Hangman-2.png');
  }else if (attempts === 3){
   $createImage.attr("src",'https://upload.wikimedia.org/wikipedia/commons/9/97/Hangman-3.png');
  }else if (attempts === 2){
   $createImage.attr("src", 'https://upload.wikimedia.org/wikipedia/commons/2/27/Hangman-4.png');
  }else if (attempts === 1){
   $createImage.attr("src",'https://upload.wikimedia.org/wikipedia/commons/6/6b/Hangman-5.png');
  }else if (attempts === 0){
   $createImage.attr("src",'https://upload.wikimedia.org/wikipedia/commons/d/d6/Hangman-6.png');
  }
  updateStats();
  getWinner();
}

var updateStats = function() {
  $("#attemptfield").html("Attempts: " + attempts);
  $("#category").html("Category: " + randomCategory);
};

// getWinner function with winning and losing conditions
var getWinner = function(){
  if(word.toString() === currentWord.toString()){
    $createImage.attr("src","http://49.media.tumblr.com/tumblr_m571uudsz71rv5j9yo1_500.gif");
    $("#attemptfield").html("You win!");
    $("#category").empty();
    var clap = new Audio("sounds/fakeApplause.mp3")
    clap.play();
    $button = $("<button>Start Over</button>");
    $button.attr("id", "button1");
    $('h1').append($button);
    var refreshScreen = function(evt) {
      window.location = window.location;
    };
  $("#button1").on("click",refreshScreen);
    } else if (attempts===0){
    var loser = new Audio("sounds/buttonPush.mp3")
    loser.play();
    $createImage.attr("src","http://45.media.tumblr.com/078de4dcc012c65f726f72c0b4910a8d/tumblr_nr53ie9eQn1re5o97o1_500.gif");
    $button = $("<button>Start Over</button>");
    $("#attemptfield").html("You lose!");
    $("#category").empty();
    $createImage.attr("src","http://45.media.tumblr.com/078de4dcc012c65f726f72c0b4910a8d/tumblr_nr53ie9eQn1re5o97o1_500.gif");
    $button = $("<button>Start Over</button>");
    $button.attr("id", "button1");
    $('h1').append($button);
    var refreshScreen = function(evt) {
    window.location = window.location;
    }
  $("#button1").on("click",refreshScreen);

  }
}
// Shows the player how many letter the searched word has
var setDisplayWordSize = function() {
  var $divs = $('.cell');
  for (var i = 0; i < $divs.length - currentWord.length; i++) {
    $divs.eq($divs.length - i - 1).hide();
  }
};
// startGame conditions
var startGame = function() {
  $createImage = $("<img>");
  $createImage.attr("src", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Hangman-0.png");
  $("#hangmanimage").append($createImage);
  won = false;
  attempts = 6;
  randomCategory = randomC();
  getRW();
  setDisplayWordSize();
  updateStats();
}

startGame();





