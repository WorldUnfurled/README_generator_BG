const inquirer = require('inquirer');
const fs = require('fs');

const headers = ['Title', 'Description', 'Installation', 'Usage', 'Contributing', 'Tests', 'License', 'Questions'];

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
            message: 'Choose a license your work will operate under.',
            choices: ['MIT', 'Codecademy', 'CodeWars']
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
        const title = `# ` + `${headers[0]}` + `\n` + `${data.title}` + `\n\n`;
        const description = `## ` + `${headers[1]}` + `\n` + `${data.description}` + `\n\n`;
        const installation = `## ` + `${headers[2]}` + `\n` + `${data.installation}` + `\n\n`;
        const usage = `## ` + `${headers[3]}` + `\n` + `${data.usage}` + `\n\n`;
        const contributing = `## ` + `${headers[4]}` + `\n` + `${data.contributing}` + `\n\n`;
        const tests = `## ` + `${headers[5]}` + `\n` + `${data.tests}` + `\n\n`;
        const license = `## ` + `${headers[6]}` + `\n` + `${data.license}` + `\n\n`;
        const questions = `## ` + `${headers[7]}` + `\n` + `${data.qEmail}` + `\n` + `${data.qGithub}` + `\n\n`;

        readmeText = [];
        readmeText.push(title);
        readmeText.push(description);
        readmeText.push(installation);
        readmeText.push(usage);
        readmeText.push(tests);
        readmeText.push(license);
        readmeText.push(questions);

        readmeGen = '';
        for (i = 0; i < readmeText.length; i++) {
            readmeGen += readmeText[i];
        }

        fs.writeFile('sampleREADME.md', readmeGen, (err) => {
            err ? console.error(err) : console.log('Commit logged!')
        });
        console.log(data.title);
    });