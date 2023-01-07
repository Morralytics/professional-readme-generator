// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// We are able to pull the information from the external file by 'linking' it to this via require
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'git'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description'
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['None', 'MIT License', 'Apachie License 2.0', 'ISC License', 'GNU PGLv2']
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repository?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution'
    }
];


function writeToFile(fileName, answers) {
    // We need to generate the README.md file using the answers from the user
    // This means we create a variable to hold this information upon the prompt trigger
    const generateMarkdownContent = generateMarkdown(answers)

    // Writes the file by accepting the name of the file, the content, followed by the callback function (error)
    fs.writeFile(fileName, generateMarkdownContent, (err) => {
        err ? console.log(err) : console.log('Success!');
    });
}

function init() {
    // Simply initializes the promise
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers);
        });
}

init();