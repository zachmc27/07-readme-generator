// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge;

function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      licenseBadge = `![License: MIT] (https://img.shields.io/badge/License-MIT-blue.svg)`;
      break;
    case "Apache 2.0":
      licenseBadge = ``;
      break;
    case "GPL":
      licenseBadge = ``;
    case "BSD":
      licenseBadge = ``
    default:
      licenseBadge = ``

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let licenseLink;

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      licenseLink = ``;
      break;
    case "Apache 2.0":
      licenseLink = ``;
      break;
    case "GPL":
      licenseLink = ``;
      break;
    case "BSD":
      licenseLink = ``;
      break;
    default:
      licenseLink = ""

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
let licenseSection;

function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      licenseSection = ``;
      break;
     case "Apache 2.0":
      licenseSection = ``;
      break;
     case "GPL":
      licenseSection = ``;
      break;
      case "BSD":
        licenseSection = ``;
        break;
    default:
      licenseSection = ""

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, description, prerequisites, installation,
  startup, operation, license, link, contribute, test, github, email) {
  
 let markdown;

  markdown = `
  # ${title}
  \n \n
  ${renderLicenseBadge(license)}
  \n \n
  ${description}
  \n \n
  ---
  \n \n
  ## Table of Contents \n
  - [Installation] (#installation)\n
  - [Usage] (#usage)\n
  - [Contributing] (#contributing)\n
  - [Tests] (#tests)\n
  - [License] (#license)\n
  - [Questions] (#questions)\n
  \n \n
  ---
  \n \n
  ## Installation
  \n \n
  Here are the prerequisites necessary to use the project:
  \n \n
  \t${prerequisites}
  \n
  To get started with the project, follow these steps:
  \n \n
  \t${installation}
  \n \n
  ---
  \n \n
  ## Usage 
  \n \n
  Here are the steps to start the application:
  \n \n
  \t${startup}
  \n
  To use the application, do the following:
  ${operation}
  \n \n 
  ## Contrubuting
  \n \n
  Any contributions are appreciated as they are vital to the improvement and wellbeing of the project.\n
  If you would like to contribute, please follow these steps:
  ${contribute}
  \n \n
  ---
  \n \n
  ## Tests
  \n \n
  In order to run tests on the project, do the following:
  \n \n
  ${test}
  \n \n
  ---
  \n \n
  ## License 
  \n \n
  ${renderLicenseSection(license)}
  \n \n
  ---
  \n \n
  ## Questions
  \n \n
  For any questions or assistance, please reach out through these mediums:
  \n \n
  - **Github:** [${github}] (https://github.com/${github})\n
  - **Email:** <${email}>\n
  ---
  `

}

export default generateMarkdown;
