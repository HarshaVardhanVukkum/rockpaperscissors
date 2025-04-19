function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById('player-choice').textContent = `You chose: ${playerChoice}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
  
    if (playerChoice === computerChoice) {
      document.getElementById('outcome').textContent = "It's a draw!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
      document.getElementById('outcome').textContent = "You win!";
    } else {
      document.getElementById('outcome').textContent = "You lose!";
    }
  }
  