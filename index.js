var inquirer = require("inquirer");
var fs = require('fs');

// var generateMarkdown = require(".utils/generateMarkdown");

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the type of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "What is a description of your project?",
    
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
    type: "input",
    name: "license",
    message: "What is the license?",
    
  },
  {
    type: "input",
    name: "contributors",
    message: "Who contributed?",
    
  },
  {
    type: "input",
    name: "test",
    message: "What is a test?",
    
  },
  {
    type: "input",
    name: "questions",
    message: "what questions did you have?"
  }
  
]).then(function(data) {


  fs.writeFile("generate.json", JSON.stringify(data), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");


    // generate markdown?

  });
});
