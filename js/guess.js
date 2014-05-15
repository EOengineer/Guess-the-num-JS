var answer = Math.floor((Math.random() * 10) + 1).toString();
var guess = prompt("Guess a number between 1 and 10");
if (guess === answer) {
  alert(guess + ' is the answer! Good Job! You Won!!');
} else {
  alert(guess + ' is the wrong answer.  Bummer, you lose.');
}
