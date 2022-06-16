function guessGame() {
  let random = Math.floor(Math.random() * 11);
  let guess;

  do {
    guess = prompt("Guess a number between 0 and 11 :)"); //generates a number between 0 and 11

    if (guess > random) {
      console.log("Go down");
    } else if (guess < random) {
      console.log("Go up");
    }
  } while (guess != random);
  
  console.log(`Congrats! You guessed the number! It was ${random}!`);
}

guessGame();
