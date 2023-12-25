// This block is removed as the event listener is already set up in the rollDice function below.

function rollDice() {
    var dice = document.getElementById('dice');
    var tickSound = document.getElementById('tickSound');
    var interval;
    var startTime = Date.now();
    var duration = 3000; // 3 seconds
    var tickRate = 100; // Rate at which the tick sound will play

    dice.classList.add("dice-rolling");

    // Shuffle the dice value every 100ms
    interval = setInterval(function() {
        var elapsedTime = Date.now() - startTime;
        var remainingTime = duration - elapsedTime;
        if (remainingTime <= 0) {
            clearInterval(interval);
            dice.classList.remove("dice-rolling");
            // This part of the code remains unchanged.
        } else {
            // This part of the code remains unchanged.
        }
    }, 100);
}

document.getElementById('rollButton').addEventListener('click', rollDice);
