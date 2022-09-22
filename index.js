var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("what's your name? ");

console.log("Welcome to this game " + userName);
console.log("            ");

//play function 

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Great! You are right!");
    score = score + 1;

  } else {
    console.log("Oops! You are wrong");

  }

  console.log("current score: ", score);
  console.log("----------");
}

// array of objects
var questions = [{
  question: "What's my fav color? ",
  answer:"black"
}, {
  question: "What's my Zodiac sign? ",
  answer:"aries"
}, {
  question: "My city name? ",
  answer: "indore"
}, {
  question: "My number's last two digits? ",
  answer: "06"
}, {
  question: "My phone's brand name? ",
  answer: "mi"
}];

//loop

for (var i=0; i<questions.length; i++) {
  var currentQuestion =questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

if(score > 3){
console.log("Congrats!! you know about me")}
else {
  console.log("you failed!!")
}
console.log("your final score is ",score)