// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge = '';

function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      licenseBadge = `![Static Badge](https://img.shields.io/badge/License-MIT-blue.svg)`;
      break;
    case "Apache 2.0":
      licenseBadge = `![Static Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
      break;
    case "GPL":
      licenseBadge = `![Static Badge](https://img.shields.io/badge/License-GPL-blue.svg)`;
    case "BSD":
      licenseBadge = `![Static Badge](https://img.shields.io/badge/License-BSD-blue.svg)`;
    default:
      licenseBadge = ``;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let licenseLink;

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      licenseLink = `https://opensource.org/license/MIT`;
      break;
    case "Apache 2.0":
      licenseLink = `https://www.apache.org/licenses/LICENSE-2.0`;
      break;
    case "GPL":
      licenseLink = `https://www.gnu.org/licenses/gpl-3.0.en.html`;
      break;
    case "BSD":
      licenseLink = `https://opensource.org/license/bsd-3-clause`;
      break;
    default:
      licenseLink = ``;

  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
let licenseSection;

function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      licenseSection = `This application is covered under the MIT License. For more information, view the official documentation [here](${renderLicenseLink('MIT')}).`;
      break;
     case "Apache 2.0":
      licenseSection = `This application is covered under the Apache 2.0 License. For more information, view the official documentation [here](${renderLicenseLink('Apache 2.0')}).`;
      break;
     case "GPL":
      licenseSection = `This application is covered under the GNU General Public License (GPL). For more information, view the official documentation [here](${renderLicenseLink('GPL')}).`;
      break;
      case "BSD":
        licenseSection = `This application is covered under the BSD license. For more information, view the official documentation [here](${renderLicenseLink('BSD')}).`;
        break;
    default:
      licenseSection = ``

  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, description, prerequisites, installation,
  startup, operation, license, contribute, test, github, email) {
  
 return `
  # ${title}
  
  ${renderLicenseBadge(license)}
  
  ## About

  ${description}
   

   
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
   

   
  ## Installation
   
  Here are the prerequisites necessary to use the project:
   
  ${prerequisites}
  
  To get started with the project, follow these steps:
   
  ${installation}
   

   
  ## Usage 
   
  Here are the steps to start the application:
   
  ${startup}
  
  To use the application, do the following:

  ${operation}
    
  ## Contributing
   
  Any contributions are appreciated as they are vital to the improvement and wellbeing of the project.

  If you would like to contribute, please follow these steps:

  ${contribute}
   

   
  ## Tests
   
  In order to run tests on the project, do the following:
   
  ${test}
   

   
  ## License 
   
  ${renderLicenseSection(license)}
   

   
  ## Questions
   
  For any questions or assistance, please reach out through these mediums:
   
  - **Github:** [${github}](https://github.com/${github})
  - **Email:** <${email}>

  `
}

export default generateMarkdown;
