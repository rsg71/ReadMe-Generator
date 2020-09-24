var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./generateMarkdown");


// // array of questions for user
const questions = [{
  type: "input",
  name: "username",
  message: "What is your Github username?"
},
{
  type: "input",
  name: "email",
  message: "What is your email address?"
},
{
  type: "input",
  name: "title",
  message: "What is the type of your project?"
},
{
  type: "input",
  name: "description",
  message: "Please write a short description of your project?",
  
},
{
  type: "input",
  name: "installation",
  message: "What is your installation?",
  
},
{
  type: "input",
  name: "usage",
  message: "What is your usage?",
  
},
{
  type: "list",
  name: "license",
  message: "What kind of license should your project have?",
  choices: [
    "Apache 2.0",
    "GPL 3.0",
    "BSD 3",
    "None"
  ]
  
},
{
  type: "input",
  name: "contributing",
  message: "Who contributed to this project?",
  
},
{
  type: "input",
  name: "tests",
  message: "What command should be run to run tests?",
  
},
{
  type: "input",
  name: "questions",
  message: "what questions did you have?"
}

];

var fileName = "newreadme.md";
// // function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("newreadme.md", generateMarkdown(data), function(err) {
  
    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
}

// // function to initialize program
function init() {

  inquirer.prompt(

    questions
  
  ).then(function(data) {
  
      writeToFile(fileName, data);
    
  });
}




// // function call to initialize program
init();