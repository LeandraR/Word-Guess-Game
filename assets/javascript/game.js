var words = ["ender", "leia", "luke", "picard", "uhura", "washburn", "malcolm", "doctor", "parzival"];
 
var word = words[Math.floor(Math.random() * words.length)];
    console.log(word);

var answerArray = [];

var guess = [];
    
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }
var remainingLetters = word.length;

    document.getElementById("startButton").onclick = function(){
    while (remainingLetters > 0) {
    
        alert(answerArray.join(" "));
        
        var guess = prompt("Guess a letter, or click Cancel to stop playing.");

        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Please enter a single letter.");
        } else {
        
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
                }
            }
        }
    }
    

document.getElementById("youWin").innerHTML = ("Good job! The answer was " + word);
}

//  wish list: guess counter, list letters already guessed, automatically refresh after game finishes.  Will re-visit when have more #devskillz!