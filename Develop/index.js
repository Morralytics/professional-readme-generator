// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        name: 'project'
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
        choices: ['MIT License', 'Apachie License 2.0', 'ISC License', 'GNU PGLv2']
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repository?',
        name: 'note'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution'
    }
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Success!');
    });
}

function init() {
    inquirer
        .promt(questions)
        .then(writeToFile('README.md', answers))
}

init();
