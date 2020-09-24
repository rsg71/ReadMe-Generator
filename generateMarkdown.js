// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
         

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
 
 ![License](https://img.shields.io/static/v1?label=${data.license}&message=license&color=red)



## Contributing: 
${data.contributing}

## Tests:
 ${data.tests}

## Questions:
${data.username}

${data.email} - Please contact me with additional questions at this email address
        

`;
}

module.exports = generateMarkdown;
