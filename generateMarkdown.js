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
${data.installation}

## Usage: 
${data.usage}

## License:

 ${data.license}





## Contributing: 
${data.contributing}

## Tests:
 ${data.tests}

## Questions:
github.com/${data.username}

${data.email} - Please contact me with additional questions at this email address
        

`;
}

module.exports = generateMarkdown;
