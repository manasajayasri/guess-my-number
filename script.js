'use strict';

//DOM Manipulation
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number🎉';

// document.querySelector('.number').textContent = 16;
// document.querySelector('.score').textContent = 17;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //NO NUMBER
  if (!guess) {
    document.querySelector('.message').textContent = '😗 No number';

    //CORRECT NUMBER
  } else if (guess === secretNumer) {
    document.querySelector('.message').textContent = '🎉 Correct number';
    document.querySelector('.number').textContent = secretNumer;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //HIGH NUMBER
  } else if (guess > secretNumer) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😘 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //LOW NUMBER
  } else if (guess < secretNumer) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😘 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumer = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
