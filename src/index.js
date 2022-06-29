import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    message: 'what is the name of your project?',
    name: 'title',
  },
  {
    type: 'list',
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
const init = async () => {
  const answers = await inquirer.prompt(questions);
  console.log(answers);
};
init();
