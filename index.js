const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            name: 'title'
        },
        {name: 'description'},
        {name: 'installation'},
        {name: 'usage'},
        {name: 'contributing'},
        {name: 'tests'},
        {name: 'license'},
        {name: 'questions'}
    ]);