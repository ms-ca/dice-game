document.getElementById('rollButton').addEventListener('click', function() {
  var sound = document.getElementById('tickSound');
  // Animate the dice
  var dice = document.getElementById('dice');
  dice.textContent = 'Rolling...';
  // You can use CSS animations or JavaScript to animate the dice roll

  // Sound
  sound.play();

});

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
            dice.textContent = Math.floor(Math.random() * 6) + 1;
        } else {
            dice.textContent = Math.floor(Math.random() * 6) + 1;
        }
    }, 100);
}

document.getElementById('rollButton').addEventListener('click', rollDice);
