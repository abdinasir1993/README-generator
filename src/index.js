// import inquirer and fs

import inquirer from 'inquirer';
import fs from 'fs';

// questions that will be asked
const questions = [
  {
    type: 'input',
    message: 'what is the name of your project?',
    name: 'title',
  },
  {
    type: 'checkbox',
    message: 'please select the content that will go in your readme',
    name: 'content',
    choices: [
      'description',
      'installation',
      'usage',
      'license',
      'contribution',
      'test',
      'contact me',
    ],
  },
  {
    type: 'input',
    message: 'what is the description of your project?',
    name: 'description',
  },
  {
    type: 'confirm',
    message: 'is there a installation process for your project?',
    name: 'confirmInstallation',
  },
  {
    type: 'input',
    message: 'what is the installation process of your project?',
    name: 'installation',
    when: (answers) => answers.confirmInstallation === true,
  },
  {
    type: 'confirm',
    message: 'is there specific applications required to run your project?',
    name: 'confirmUsage',
  },
  {
    type: 'input',
    message: 'what is the application required for your project?',
    name: 'usage',
    when: (answers) => answers.confirmUsage === true,
  },
  {
    type: 'confirm',
    message: 'do you have any licenses in your project?',
    name: 'confirmLicense',
  },
  {
    type: 'choice',
    message: 'what is the license for your project?',
    name: 'license',
    choices: ['MIT', 'apache', 'GNU general public', 'Boost Software'],
    when: (answers) => answers.confirmLicense === true,
  },
  {
    type: 'input',
    message: 'what is your github username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'what is your email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'what is the installation process of your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'what is the installation process of your project?',
    name: 'installation',
  },
];
// function to ask questions
const init = async () => {
  const answers = await inquirer.prompt(questions);
  console.log(answers);
  // call function to generate readme
  const generatedReadmeMD = generatedMD(answers);
  fs.writeFileSync('./generated.md', generatedReadmeMD);
};
const generatedMD = (answers) => {
  return `#${answers.title} ![${answers.license}](https://img.shields.io/badge/${answers.license}-License-green)

  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  
  ${answers.description}
  
  ## Installation
  
  Please follow the instructions below:
  
 
  ${answers.installation}
 
  
  ## Usage
  
  Please follow the instructions below:
  
  
  ${answers.usage}
 
  
  ## License
  
  MIT License
  
  ## Tests
  
  Please follow the instructions below:
  
  
 ${answers.usage}
  
  
  ## Questions
  
  Please contact me on my email:${answers.email}
  
  Visit my GitHub profile [here](${answers.github})
  `;
};
init();
