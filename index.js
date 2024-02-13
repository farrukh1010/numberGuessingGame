import inquirer from 'inquirer';
// Generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
async function startGame() {
    const minNumber = 1;
    const maxNumber = 100;
    const targetNumber = generateRandomNumber(minNumber, maxNumber);
    let attempts = 0;
    console.log('Welcome to the Number Guessing Game!');
    console.log(`I'm thinking of a number between ${minNumber} and ${maxNumber}. Can you guess it?\n`);
    while (true) {
        attempts++;
        const { guess } = await inquirer.prompt({
            type: 'input',
            name: 'guess',
            message: 'Enter your guess:',
            validate: (input) => {
                const num = parseInt(input);
                if (isNaN(num) || num < minNumber || num > maxNumber) {
                    return `Please enter a number between ${minNumber} and ${maxNumber}.`;
                }
                return true;
            }
        });
        const userGuess = parseInt(guess);
        if (userGuess === targetNumber) {
            console.log(`Congratulations! You've guessed the number ${targetNumber} in ${attempts} attempts.`);
            break;
        }
        else if (userGuess < targetNumber) {
            console.log('Too low! Try again.');
        }
        else {
            console.log('Too high! Try again.');
        }
    }
}
startGame();
