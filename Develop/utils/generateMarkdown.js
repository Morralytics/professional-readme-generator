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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    // ![GitHub License](https://img.shields.)

    ## Description

    // add description link (description)

    ## Table of Contents

    * [Installation](#installation)

    * [Usage](#usage)
    
    * [License](#license)

    * [Contributing](#contributing)

    * [Tests](#tests)

    * [Questions](#questions)

    ## Installation

   // add installation link (installation)

    ## Repo and Deployed Site Links

    Here is a link to the git hub repo: https://github.com/Volexity21/Yoda-Translator

    Here is the link to the deployed site: https://volexity21.github.io/Yoda-Translator/

    ## Screenshots
    Here are several images of the live application:
    ![.](./assets/images/Screenshot%202022-12-16%20115124.png)
    ![.](./assets/images/Screenshot%202022-12-16%20115210.png)
    ![.](./assets/images/Screenshot%202022-12-16%20115155.png)

    ## Questions

    //(WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile (github.com/(git))
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions)

    The team hopes to implement the following wishlist items in future updates:

    - Append random Yoda picture to second page underneath appended quote
    - Add sound effect (e.g. blaster, light saber) on button click of generate button
    - Add history button and additional local storage functionality to allow user to see history of recently translated quotes`;
}

module.exports = generateMarkdown;
