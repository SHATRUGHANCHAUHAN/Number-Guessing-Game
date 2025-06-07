const max = prompt("Enter the maximum number:");

const random = Math.floor(Math.random() * max);

let guess = prompt("Enter the guess number");

while (true) {
  if (guess == "quit") {
    console.log("user quit");
    break;
  }
  if (guess == random) {
    console.log("Congurates!! you guess the right answer");
    break;
  } else if (guess < random) {
    guess = prompt("Guess number is too small");
  } else {
    guess = prompt("Your guess is too large !! try again");
  }
}