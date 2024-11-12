'use strict';

let secretNumer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //NO NUMBER
  if (!guess) {
    displayMessage('😗 No number');

    //CORRECT NUMBER
  } else if (guess === secretNumer) {
    displayMessage('🎉 Correct number');
    document.querySelector('.number').textContent = secretNumer;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //WRONG NUMBER
  } else if (guess !== secretNumer) {
    if (score > 1) {
      displayMessage(guess > secretNumer ? '📉 Too high!' : '📈 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😘 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumer = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
