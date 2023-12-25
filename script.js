// This block is removed as the event listener is already set up in the rollDice function below.

function rollDice() {
    var dice = document.getElementById('dice');
    var tickSound = document.getElementById('tickSound');
    var interval;
    var startTime = Date.now();
    var duration = 3000; // 3 seconds

    dice.classList.add("dice-rolling");
    tickSound.play();

    // Shuffle the dice value every 100ms
    interval = setInterval(function() {
        var elapsedTime = Date.now() - startTime;
        var remainingTime = duration - elapsedTime;
        if (remainingTime <= 0) {
            clearInterval(interval);
            dice.classList.remove("dice-rolling");
            clearInterval(interval);
            dice.classList.remove("dice-rolling");
            var finalNumber = Math.floor(Math.random() * 6) + 1;
            dice.textContent = finalNumber;
            tickSound.play(); // Play the sound for the final number
        } else {
            var newNumber = Math.floor(Math.random() * 6) + 1;
            dice.textContent = newNumber;
            tickSound.currentTime = 0; // Reset the sound to start
            tickSound.play(); // Play the sound with each change
        }
    }, 100);
}

document.getElementById('rollButton').addEventListener('click', rollDice);
