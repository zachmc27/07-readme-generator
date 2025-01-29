// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge;

function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      licenseBadge = 'MIT badge';
      break;
    default:
      licenseBadge = ""

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let licenseLink;

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      licenseLink = 'MIT link';
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
      licenseSection = 'MIT section';
      break;
    default:
      licenseSection = ""

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
