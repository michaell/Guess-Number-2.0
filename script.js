'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Display messages
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/*Check button functionality*/
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Incorrect input
  if (!guess) {
    displayMessage('Not a Number!');

    // Player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('.number').style.fontSize = '9rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Guess is wrong (higher or lower of the secret number)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage("💥 You've loose the game!");
      document.querySelector('.score').textContent = 0;
    }
  }
});

/*Again button functionality*/
document.querySelector('.again').addEventListener('click', function () {
  //Restoring Secret Number and Score values
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  //Restoring information on the screen
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.fontSize = '7.5rem';
});
