// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
         
  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)

## Description:
 ${data.description}

    
## Table of Contents: 
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation: 

### To install necessary dependencies, run the following command:

${data.installation}

## Usage: 
${data.usage}

## License:
 ${data.license}


## Contributing: 
${data.contributing}

## Tests:

### To run tests, run the following command:
 ${data.tests}

## Questions:
github.com/${data.username}

${data.email} - Please contact me at this email address with additional questions
        

`;
}

module.exports = generateMarkdown;
