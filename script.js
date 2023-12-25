// This block is removed as the event listener is already set up in the rollDice function below.

function rollDice() {
    var dice = document.getElementById('dice');
    // This part of the code remains unchanged.

    // Shuffle the dice value every 100ms
    interval = setInterval(function() {
        var elapsedTime = Date.now() - startTime;
        var remainingTime = duration - elapsedTime;
        if (remainingTime <= 0) {
            clearInterval(interval);
            dice.classList.remove("dice-rolling");
            dice.textContent = Math.floor(Math.random() * 6) + 1;
        } else {
            var newNumber = Math.floor(Math.random() * 6) + 1;
            dice.textContent = newNumber;
            tickSound.currentTime = 0; // Reset the sound to start
            tickSound.play(); // Play the sound with each change
        }
    }, 100);
}

document.getElementById('rollButton').addEventListener('click', rollDice);
