"use strict"
//visitor name prompt

let username = prompt("Hi, what is your name?");
const welcomeMsg = alert("Welcome " + username);

function quiz() {
//question 1
let question = prompt("So " + username + " " + "Was I born in London? Please answer yes/no or y/n only").toLowerCase();

while (question != "yes" && question != "no" && question != "y" && question != "n") {
  alert("Please answer yes/no or y/n only");
  question = prompt("Was I born in London?").toLowerCase();
}

if (question === "yes" || question === "y") {
  // console.log("Yes! Well done");
  alert("Yes! Well done!");
} else if (question === "no" || question === "n") {
  // console.log("Ohh no");
  alert("Ohh no");
}

//question 2

let question2 = prompt("Did I get Mcdonalds every Saturday?").toLowerCase();

while (question2 != "yes" && question2 != "no" && question2 != "y" && question2 != "n") {
  alert("Please answer yes/no or y/n only");
  question2 = prompt("Was I born in London?").toLowerCase();
}

if (question2 === "yes" || question2 === "y") {
  // console.log("Yes! Well done");
  alert("Yes! Well done!");
} else if (question2 === "no" || question2 === "n") {
  // console.log("Ohh no");
  alert("Ohh no");

}

//question3 

let question3 = prompt("Was my most listened to artist ABBA?").toLowerCase();

while (question3 != "yes" && question3 != "no" && question3 != "y" && question3 != "n") {
  alert("Please answer yes/no or y/n only");
  question3 = prompt("Was my most listened to artist ABBA?").toLowerCase();
}

if (question3 === "yes" || question3 === "y") {
  // console.log("Yes! Well done");
  alert("Yes! Well done!");
} else if (question3 === "no" || question3 === "n") {
  // console.log("Ohh no");
  alert("Fernand No!");
}

//question 4
let question4 = prompt("Am I currently watching Real Housewifes").toLowerCase();

while (question4 != "yes" && question4 != "no" && question4 != "y" && question4 != "n") {
  alert("Please answer yes/no or y/n only");
  question4 = prompt("Am I currently watching Real Housewifes?").toLowerCase();
}

if (question4 === "yes" || question4 === "y") {
  // console.log("Yes! Well done");
  alert("Yes! Well done!");
} else if (question4 === "no" || question4 === "n") {
  // console.log("Ohh no");
  alert("Ya'll having a laugh!");
}

//Question 5

let question5 = prompt("Did I interview Boris?").toLowerCase();

while (question5 != "yes" && question5 != "no" && question5 != "y" && question5 != "n") {
  alert("Please answer yes/no or y/n only");
  question5 = prompt("Did I interview Boris?").toLowerCase();
}

if (question5 === "yes" || question5 === "y") {
  // console.log("Yes! Well done");
  alert("Yes! Well done!");
} else if (question5 === "no" || question5 === "n") {
  // console.log("Ohh no");
  alert("immo!");
}

 /*
    // choosing my number
  const number = "7";
  
  let question6 = prompt ('Guess a number from 1 to 100, you have" + gues');

  for (let i = 2; i >= 0; i--) {
    let guesses = i + 1;
  
      // Correct answer
      if (question6 == number) {
      alert ("Gongratulations you correct") 
      break;
      } 
    // If guessed number is too high or low
      else if (question6 > number) {
        alert ("Sorry, too high, try again");
        
      }
    else if (question < number) {
      alert ("Sorry, too low, try again")
    }
    if (i === 0) {
      alert("The correct number was " + number);
      break;
    }
  }
  */
  
  // const number = "7";
const number = Math.floor(Math.random() * 50 + 1);
console.log(number);

for (let i = 2; i >= 0; i--) {
  let guesses = i + 1;

  let guess = prompt("Guess a number between 1 and 50! you have " + guesses + " attempts");

  const guessNum = parseInt(guess);

  if (guessNum === number) {
    // console.log("You win");
    alert("You win");
    break;
  } else if (guessNum < number) {
    // console.log("to low");
    alert("to low");
  } else if (guessNum > number) {
    // console.log("to high");
    alert("to high");
  }

  if (i === 0) {
    alert("The correct number was " + number);
    break;
  }
}
}