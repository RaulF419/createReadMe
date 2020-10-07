function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https;//img.shields.io/badge/license-${license}~blue.svg)`
  }
  return ''
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`

    )
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
This project is licensed under the ${license} license.`
    )
}
 return ``
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
    ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)

  * [Test](#test)

  * [Question](#question)

  ## Installation

  To install necessary dependecies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Test

  To run tests, run the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any questions about the repo, open an issue or 
  contact me directly at ${data.email}. You can find more of my work at

`;
}

module.exports = generateMarkdown;
