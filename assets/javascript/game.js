var words = ["ender", "leia", "luke", "picard", "uhura", "washburn", "malcolm", "doctor", "parzival"];

var randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
var remainingGuesses = 6;
var wins = 0;
var losses = 0;
var answerArray = [];



document.getElementById("startButton").onclick = function(){

    //generate random word
    for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = "_";
        document.getElementById("word-blanks").innerHTML = answerArray.join(" ");
        }

    //get user input from keyup event
    document.onkeyup = function(event) {
        var guess = (event.key);
        console.log(guess);

        for (var j = 0; j < randomWord.length; j++) {
                if (randomWord[j] === guess) {
                answerArray[j] = guess;
                document.getElementById("word-blanks").innerHTML = answerArray.join(" ");
            }
        }
        //if word does not include letter
        if(!randomWord.includes(guess)) {
            //Subtract guess
            remainingGuesses -= 1;
            document.getElementById("guessesLeft").innerHTML = remainingGuesses;
            //Create a new LI
            var node = document.createElement("LI");
            //Make user guess upperguess
            var textnode = document.createTextNode(guess.toUpperCase());
            //append the user guess to the new LI
            node.appendChild(textnode);
            //append the LI to the wrong guesses element
            document.getElementById("wrongGuesses").appendChild(node);
        }

        var guess = answerArray.join("");
            if(randomWord == guess) {
                document.getElementById("youWin").innerHTML = ("Good job! The answer was " + randomWord);
                wins += 1;
                document.getElementById("win-counter").innerHTML = wins;
            }
            if(remainingGuesses === 0) {
                alert("You Lose");
                losses += 1;
                document.getElementById("loss-counter").innerHTML = losses;
            }
        }
}









// document.getElementById("startButton").onclick = function(){
//     while (remainingLetters > 0) {

//         alert(answerArray.join(" "));

//         var guess = prompt("Guess a letter, or click Cancel to stop playing.");

//         if (guess === null) {
//             break;
//         } else if (guess.length !== 1) {
//             alert("Please enter a single letter.");
//         } else {

//         for (var j = 0; j < randomWord.length; j++) {
//             if (randomWord[j] === guess) {
//             answerArray[j] = guess;
//             remainingLetters--;
//                 }
//             }
//         }
//     }


//     document.getElementById("youWin").innerHTML = ("Good job! The answer was " + randomWord);

//  wish list: guess counter, list letters already guessed, automatically refresh after game finishes.  Will re-visit when have more #devskillz!