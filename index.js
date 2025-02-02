// TODO: Include packages needed for this application
import fs from 'fs'
import generateMarkdown from './utils/generateMarkdown.js';
import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
//length: 11  
const questions = ['What is the title of the project?', 'Describe your application:', 'List prerequisites necessary, each separated by a comma:',
     'List installation steps, separated by a comma:', 'List steps to start the application, separated by a comma:', 'Explain how to operate the main functionality of the application:', 
     'Which license would you like to use?', 'How can a user contribute to the project? List steps separated by a comma.', 'How can a user run tests on the project?', 'What is your github username?', 
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
                choices: ['MIT', 'Apache 2.0', 'GPL', 'BSD']
            },
            {
                type: 'input',
                message: questions[7],
                name: 'contribute'
            },
            {
                type: 'input',
                message: questions[8],
                name: 'test'
            },
            {
                type: 'input',
                message: questions[9],
                name: 'github'
            },
            {
                type: 'input',
                message: questions[10],
                name: 'email',
            }
        ])
        .then((ans) => {
            const prereqArray = ans.prerequisites.split(',').map(item => item.trim());
            const installArray = ans.installation.split(',').map(item => item.trim());
            const startupArray = ans.startup.split(',').map(item => item.trim());
            const contributeArray = ans.contribute.split(',').map(item => item.trim());

            function formattedSteps(array) {
                let generatedSteps = '';
                for (let i = 0; i < array.length; i++) {
                    let stepString = `${i+1}. ${array[i]}\n`
                    generatedSteps += stepString;
                }
                return generatedSteps;
            }
                

            
            writeToFile('Success.md', generateMarkdown(ans.title, ans.description, 
                formattedSteps(prereqArray), formattedSteps(installArray), formattedSteps(startupArray), ans.operation, ans.license,
                formattedSteps(contributeArray), ans.test, ans.github, ans.email), 
                (err) => err ? console.error(err) : console.log('Success!'))
            
        })
}

// Function call to initialize app
init();
