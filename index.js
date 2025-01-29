// TODO: Include packages needed for this application
import fs from 'fs'
import generateMarkdown from './utils/generateMarkdown';
import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
//length: 9
const questions = ['What is the title of the project?', 'Describe your application', 'List a table of contents for the application:', 'Describe the installation process:', 'Describe the usage:', 'What license does your application use?', 'Who contributed', 'Describe the testing process', 'How can users reach out to ask questions about the application?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`${fileName}`, data, (err) => {
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
            }
        ])
        .then((response) => {
            writeToFile('README', generateMarkdown())
        })
}

// Function call to initialize app
init();
