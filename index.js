const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title'
        },
        {   
            type: 'input',
            name: 'description'
        },
        {
            type: 'input',
            name: 'installation'
        },
        {
            type: 'input',
            name: 'usage'
        },
        {
            type: 'input',
            name: 'contributing'
        },
        {
            type: 'input',
            name: 'tests'
        },
        {
            type: 'list',
            name: 'license'
        },
        {
            type: 'input',
            name: 'qEmail'
        },
        {
            type: 'input',
            name: 'qGithub'
        }
    ]);