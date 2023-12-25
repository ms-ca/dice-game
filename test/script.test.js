// Import necessary functions and classes from script.js
import { rollDice } from './script.js';

// Unit tests for the new business logic in script.js
describe('rollDice', () => {
  // Mock the necessary DOM elements and sound playback
  const diceElement = document.createElement('div');
  const tickSound = {
    play: jest.fn()
  };

  beforeEach(() => {
    // Reset the dice element and mock sound playback
    diceElement.textContent = '';
    tickSound.play.mockClear();
  });

  test('should add "dice-rolling" class to dice element', () => {
    // Call the rollDice function
    rollDice(diceElement, tickSound);

    // Check if the "dice-rolling" class is added to the dice element
    expect(diceElement.classList.contains('dice-rolling')).toBe(true);
  });

  test('should play tick sound', () => {
    // Call the rollDice function
    rollDice(diceElement, tickSound);

    // Check if the tick sound is played
    expect(tickSound.play).toHaveBeenCalled();
  });

  test('should remove "dice-rolling" class and set final face after animation', () => {
    // Call the rollDice function
    rollDice(diceElement, tickSound);

    // Simulate the animation duration
    jest.advanceTimersByTime(3000);

    // Check if the "dice-rolling" class is removed from the dice element
    expect(diceElement.classList.contains('dice-rolling')).toBe(false);

    // Check if the final face of the dice is set
    expect(diceElement.textContent).toMatch(/[1-6]/);
  });
});

// Unit tests for the event listener on the rollButton element
describe('rollButton event listener', () => {
  // Mock the necessary DOM elements and sound playback
  const rollButton = document.createElement('button');
  const diceElement = document.createElement('div');
  const tickSound = {
    play: jest.fn()
  };

  beforeEach(() => {
    // Reset the dice element and mock sound playback
    diceElement.textContent = '';
    tickSound.play.mockClear();
  });

  test('should call rollDice function on button click', () => {
    // Attach the rollDice function to the rollButton click event
    rollButton.addEventListener('click', () => rollDice(diceElement, tickSound));

    // Simulate a button click
    rollButton.click();

    // Check if the rollDice function is called
    expect(diceElement.classList.contains('dice-rolling')).toBe(true);
    expect(tickSound.play).toHaveBeenCalled();
  });
});
