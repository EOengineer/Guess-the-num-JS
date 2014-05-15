var guess = 0;
var answer = Math.floor((Math.random() * 2) + 1).toString();
while (guess !== answer) {
var guess = prompt("Guess a number between 1 and 10");
if (guess === answer) {
  alert(guess + ' is the answer! Good Job! You Won!!');
} else {
  alert(guess + ' is not it! Guess again!');
}
}
