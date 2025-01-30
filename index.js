// TODO: Include packages needed for this application
import fs from 'fs'
import generateMarkdown from './utils/generateMarkdown';
import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
//length: 11  
const questions = ['What is the title of the project?', 'Describe your application:', 'List prerequisites necessary in an array format:',
     'List installation steps in an array format:', 'List steps to start the application in an array format:', 'Explain how to operate the main functionality of the application:', 
     'Which license would you like to use?', 'How can a user contribute to the project?', 'Describe the testing process:', 'What is your github username?', 
     'What email would you like to provide for user questions?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, (err) => {
        err ? console.error(err) : console.log(`${fileName} has been written.`)
    })

    
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'prerequisites',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'startup',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'operation',
            },
            {
                type: 'list',
                message: questions[6],
                name: 'license',
                choices:
            }

        ])
        .then((response) => {
            writeToFile('README.md', generateMarkdown())
        })
}

// Function call to initialize app
init();
