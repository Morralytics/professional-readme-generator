// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
      break;
    case 'Apachie License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
      break;
    case 'ISC License':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
      break;
    case 'GNU PGLv2':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`
      break;
    case 'None':
      return ``
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT License':
      return `(https://opensource.org/licenses/MIT)`
      break;
    case 'Apachie License 2.0':
      return `(https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'ISC License':
      return `(https://opensource.org/licenses/ISC)`
      break;
    case 'GNU PGLv2':
      return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
      break;
    case 'None':
      return ``
      break;
  }
}

function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}
  
${renderLicenseLink(license)}`
}


function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}
## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
    
* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

[Link to GitHub profile]${data.git}

${data.email}`
}

module.exports = generateMarkdown;
