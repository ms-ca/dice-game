document.getElementById('rollButton').addEventListener('click', function() {
  var sound = document.getElementById('tickSound');
  // Animate the dice
  var dice = document.getElementById('dice');
  dice.textContent = 'Rolling...';
  // You can use CSS animations or JavaScript to animate the dice roll

  // Sound
  sound.play();

  // Generate a random number between 1 and 6 after a delay
  setTimeout(function() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.textContent = randomNumber; // Update text or image according to randomNumber
  }, 1000); // Set timeout according to animation duration
});