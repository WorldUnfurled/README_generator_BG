const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What will the title of your work be?'
        },
        {   
            type: 'input',
            name: 'description',
            message: 'Provide a description of your work.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide any necessary installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is your project used?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Detail tests run on your project.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license your work will operate under.'
        },
        {
            type: 'input',
            name: 'qEmail',
            message: 'At what email can you be contacted with questions about your project?'
        },
        {
            type: 'input',
            name: 'qGithub',
            message: "What is the Github profile for this project's repo?"
        }
    ]).then((data) => {
        
    });