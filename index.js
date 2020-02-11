const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//---------------------------------------------------------------------------------

start();

async function start() {
  console.log("\nLet's play a game where you make up a number and I try to guess it.")
  let secretNumber = await ask("\nWhat is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  //secretNumber = the number user inputs for computer to guess.
  function compGuess(max, min) {
    //compGuess = Function for Computer generated guess
    return (min) + Math.floor(Math.random() * (max - min))
  }

//---------------------------------------------------------------------------------

  game()

async function game() {
    let max = Number(process.argv[2]) || 100
    //allows user to input a mx number for the guessing range. If no number inputed will revert to 100
    let min = 1
    let turns = 0;
    //turns is the amount of tries it takes the computer to guess my number
    console.log("\nOkay computer give it your best shot!\nGuess a number between 1 and " + max + "!")
    let guess = compGuess(max, min)
    // takes compGuess function and assigns it to a variable.
    let playerAnswer = await ask("Is your number " + guess + "? y/n ")
    // player answer is the players response to the computers guess. in the form of y / n
    if (guess > secretNumber) {
      console.log("Too High! Guess again!\n")
      max = guess
      // reassigning the max to the guess allows for the guessing range to be narrowed down.
    } else if (guess < secretNumber) {
      console.log("Too low! Guess again!\n")
      min = guess + 1
    }
    while (playerAnswer !== "yes" || playerAnswer !== "y") {
      guess = compGuess(max, min)
      playerAnswer = await ask("Is your number " + guess + "? y/n ")

    turns = turns + 1
      // for each guess the turns will count up. 
    if (guess > secretNumber) {
      console.log("Too High! Guess again!\n")
      max = guess
    } else if (guess < secretNumber) {
      console.log("Too low! Guess again!\n")
      min = guess + 1
    } else {
      console.log("\nGreat job it only took you " + turns + " tries!")
      cpuTest()
        // this second function runs for the role reversal. 
        
//---------------------------------------------------------------------------------
        
async function cpuTest() {

  function cpuNum(max) {
      return Math.floor(Math.random() * Math.floor(max))}
      //generates random number

  console.log("\nNow that I guessed your number try to guess mine!")

  let cpuSecretNumber = cpuNum(100)
  let tries = 1
      // tries is how many times it takes user to guess computers number.

  let myGuess = await ask("Guess a number between 1 and 100!");
      console.log("Your guess is " + myGuess)
    if (myGuess > cpuSecretNumber) {
      console.log("\nToo High guess again! ");
    } else if (myGuess < cpuSecretNumber) {
      console.log("\nToo low guess again! ");
    }
    while (myGuess !== cpuSecretNumber) {
      myGuess = await ask("Guess another number! ")
      tries = tries + 1
    if (myGuess > cpuSecretNumber) {
      console.log("\nToo High guess again! ");
    } else if (myGuess < cpuSecretNumber) {
      console.log("\nToo low guess again! ");
    } else {
      if (tries > 7) {
        console.log("\nYikes... I expected more from you. It took you " + tries + " tries!")
    }
      else if (tries < 7) {
        console.log("\nCongrats you got my number in " + tries + " tries")
    }

  //---------------------------------------------------------------------------------

  gameWinner()
  // this function runs to check who is the overall winner. tries = computers turns, turns = user turns
  function gameWinner() {
    if (tries < turns) {
      console.log("Damn I lost :(")
    }
    else if (tries > turns) {
      console.log("Ha, I beat you :)")
    }
    else if (tries === turns) {
      console.log("Ah it looks to be a draw :|")
    }
    } process.exit()
    }
    }
    }
    }
    }
  }
}

