// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
         

## Description:
 ${data.description}
    
## Table of Contents: 
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributors)
* [Test](#Test)
* [Questions](#Questions)

## Installation: 
${data.installation}

## Usage: 
${data.usage}

## License:
 ${data.license}

## Contributing: 
${data.contributors}

## Tests:
 ${data.tests}

## Questions:
${data.questions}
        

`;
}

module.exports = generateMarkdown;
