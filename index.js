const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Github link?",
      name: "github"
    },
    {
      type: "input",
      message: "What is your Project Name/Title?",
      name: "title"
    },
    {
      type: "editor",
      message: "Briefly Describe your project?",
      name: "description"
    },
    {
      type: "input",
      message: "Enter the link for your Github repository of the Project.",
      name: "link"
    },
    // {
    //   type: "input",
    //   message: "Enter your Table of Contents (Optional)",
    //   name: "contents"
    // },
    {
      type: "editor",
      message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      name: "installation"
    },
    {
      type: "editor",
      message: "Provide instructions and examples for use. Include screenshots as needed.",
      name: "usage"
    },
    {
      type: "editor",
      message: "List your collaborators, if any, with links to their GitHub profiles.",
      name: "credits"
    },
    {
      type: "list",
      message: "Choose an applicable license from the list",
      name: "license",
      choices: [
          "MIT License",
          "Apache License 2.0",
          "Mozilla Public License 2.0"
      ]
    },
    {
      type: "editor",
      message: "If you want other developers to contribute, Please add the guidelines to do so.",
      name: "contributing"
    },
    {
      type: "editor",
      message: "Go the extra mile and write tests for your application.",
      name: "tests"
    },
  ])
  .then(function(response) {


  var licenseUrl 
  var imageUrl

  if (response.license ==="MIT License"){
    licenseUrl = "https://opensource.org/licenses/MIT"
    imageUrl = "MIT-Green"
  } else if (response.license ==="Apache License 2.0"){
    licenseUrl = "https://www.apache.org/licenses/LICENSE-2.0"
    imageUrl = "Apache-BrightGreen"
  } else if (response.license ==="Mozilla Public License 2.0"){
    licenseUrl = "https://www.mozilla.org/en-US/MPL/2.0/"
    imageUrl = "Mozilla-Red"
  }

  const finalReadMe = `
  # ${response.title}
---

  ![Badge](https://img.shields.io/badge/license-${imageUrl})

  ## Description
  ${response.description}
  [The Link to My Github Repository](${response.link})
---

  ## Table of Contents
  1. Installation
  1. Usage
  1. Credits
  1. License
---

  ## Installation
  ${response.installation}
---

  ## Usage
  ${response.usage}
---

  ## Credits
  ${response.credits}
---

  ## License
  #### This application is licensed under the [${response.license}](${licenseUrl})
  
---

  ## Collaborators
  ${response.contributing}
  #### You can reach me via my Github account at [Github](${response.github})
  
---

  ## Test
  ${response.tests}

---

 
`
fs.writeFile("goodReadMe.md", finalReadMe, function(err) {

    if (err) {
      return console.log(err);
    }
  
    console.log("Success!");
  
  });

  });
