var inquirer = require("inquirer");
var arrayQuestions = require('./app.js');
var arrayFront = require('./app2.js');



//Function calling partial question
function recurs(i){

if(i >= arrayQuestions.length)
  return;

inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: arrayQuestions[i].partial,
      name: "answer"
    }

  ])
  .then(function(inquirerResponse) {
    if(inquirerResponse.answer === arrayQuestions[i].cloze){
      console.log("Correct!\n");
    } else {
      console.log("Wrong \n");
    }
    i++;
    recurs(i);
  });
};







//Function calling full questions
function recursFront(i){

if(i >= arrayFront.length)
  return;

inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: arrayFront[i].front,
      name: "answer"
    }

  ])
  .then(function(inquirerResponse) {
    if(inquirerResponse.answer === arrayFront[i].back){
      console.log("Correct!\n");
    } else {
      console.log("Wrong \n");
    }
    i++;
    recursFront(i);
  });
};





//Function asking user what question they want to answer
function whatQuestion(){
  inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What kind of question would you like? Front or partial?",
      name: "answer"
    }

  ])
  .then(function(inquirerResponse) {
    if(inquirerResponse.answer === "front"){
      recursFront(0);
    } else if (inquirerResponse.answer === "partial"){
      recurs(0);
    }
  });
};

//Ask user what question to run
whatQuestion();
