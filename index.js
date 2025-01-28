// TODO: Include packages needed for this application
import fs from 'fs'
import generateMarkdown from './utils/generateMarkdown';
// TODO: Create an array of questions for user input
 
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`${fileName}`, data, (err) => {
        err ? console.error(err) : console.log(`${fileName} has been written.`)
    })

    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
