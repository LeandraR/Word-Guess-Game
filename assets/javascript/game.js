// list options for hangman
var word = ["Ender Wiggens", "Leia Organa", "Luke Skywalker", "Jean Luc Picard", "Uhura", "Washburn", "River Song", "Malcolm Reynolds", "The Doctor", "Parzival"];

//var to assign _ to letters in word

var answerArray = [];

//choose a random name from var words
var currentWord = [Math.floor(Math.random()*word.length)];

// logs computer chosen word to console
console.log(word[currentWord]);

// for loop to assign _ to letters in word
for (var i=0; i < word.length; i++){
    answerArray[i]="_";
}

//continues looping while still letters to guess
while (remaining letters > 0){

}

