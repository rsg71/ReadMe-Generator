var inquirer = require("inquirer");
var fs = require('fs');

// var generateMarkdown = require(".utils/generateMarkdown");

inquirer.prompt([
  {
    type: "input",
    name: "#title",
    message: "What is the type of your project?"
  },
  {
    type: "input",
    name: "##description",
    message: "Please write a short description of your project?",
    
  },
  {
    type: "input",
    name: "##installation",
    message: "What is your installation?",
    
  },
  {
    type: "input",
    name: "##usage",
    message: "What is your usage?",
    
  },
  {
    type: "list",
    name: "##license",
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
    name: "##contributors",
    message: "Who contributed?",
    
  },
  {
    type: "input",
    name: "##test",
    message: "What command should be run to run tests?",
    
  },
  {
    type: "input",
    name: "##questions",
    message: "what questions did you have?"
  }
  
]).then(function(data) {


  fs.writeFile("newreadme.md", JSON.stringify(data, null, '\n'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");


    // generate markdown?

  });
});
