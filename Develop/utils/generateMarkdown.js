// function to generate markdown for README
function generateMarkdown(data) {
  return `
  #  ${data.title}
  
  ![GitHub top language](https://img.shields.io/github/languages/top/${data.username}/${data.repository})
  
  ${data.description}

  ## Table of Contents
  *[Installation](#install)
  *[Usage](#usage)
  *[Contributors](#contributors)
  *[Test](#test)
  *[Questions](#questions)
  *[License](#license)
  *[Author](#author)
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Contributors
  ${data.contributors}
  
  ## Test
  ${data.test}
  
  ## Questions
  If you have any questions, contact ${data.username} on GitHub
  
  ## License
  
  ## Author
  This application was authored by [${data.name}](${data.username})
  `;
}

module.exports = generateMarkdown;