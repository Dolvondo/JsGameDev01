var mainPlayer = {
    name: "Player1",
    rank: "Pawn",
    speed: 10,
    power: 1,
messenger: function (message) { //message inherites the value/string from phrases[i]
    alert("Is this correct? " + message);
     }
}
mainPlayer.name = prompt("Enter your name");

alert("Welcome " + mainPlayer.name);
var phrases = [
        prompt("Please enter mother's maiden name."), 
        prompt("Enter your phone number"),
        prompt("Enter your credit card number"),
        prompt("Who is your first born child?")
        ];
    
    for (var i = 0; i < phrases.length ; i++) {
        mainPlayer.messenger(phrases[i]);
    }

function PlayerGame(firstNum, secondNum) {
    return firstNum + secondNum;
    }

var firstPrompt = parseInt(prompt("Enter a number between 0 and 10"));
var secondPrompt = parseInt(promp("Enter a number between 11 and 20"));

var score = PlayerGame(firstPrompt, secondPrompt);
alert("Your score is " + score + ".");
alert("Do you want to play again?")