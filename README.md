# Number-Guessing-Game
Number Guessing Game — JavaScript Console Edition
A simple number guessing game built using vanilla JavaScript that runs in the browser console. The player tries to guess a randomly generated number between 0 and a maximum value they provide. The game continues until the correct guess is made or the player chooses to quit.

📜 How It Works:
The program first prompts the user to enter a maximum number — this defines the range within which a random number is generated.

The user is then prompted to enter a guess number.

The program runs a loop:

If the user types "quit" — the game stops.

If the user's guess matches the random number — a congratulatory message is shown in the console.

If the guess is too small — the program prompts them again indicating it's too low.

If the guess is too large — the program prompts them again indicating it's too high.

The process continues until the player guesses the correct number or decides to exit.

📌 Features:
User-defined range for the random number.

Real-time feedback whether the guess is too small or too large.

Option to gracefully quit the game anytime by typing "quit".

Clean and readable code with clear logic using prompt(), console.log(), and while(true) loop.

📷 Preview:
💡 Open your browser's Developer Console and paste the code to play!

📦 Technologies Used:
HTML (via browser window prompt/console)

Vanilla JavaScript
