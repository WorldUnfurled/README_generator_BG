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
        let tableOfContents = '';

        for (i = 1; i < headers.length; i++) {
            tableOfContents += `[` + `${i}` + `. ` + `${headers[i-1]}` + `]` + `(` + `#`  + `${headers[i-1]}` + `)` + `\n`;
        }

        const title = `# ` + `${headers[0]}` + `\n\n`;
        const tOC = `# ` + `Table of Contents` + `\n\n`;
        const description = `\n\n` + `## ` + `${headers[1]}` + `\n\n` + `${data.description}` + `\n\n`;
        const installation = `## ` + `${headers[2]}` + `\n\n` + `${data.installation}` + `\n\n`;
        const usage = `## ` + `${headers[3]}` + `\n\n` + `${data.usage}` + `\n\n`;
        const contributing = `## ` + `${headers[4]}` + `\n\n` + `${data.contributing}` + `\n\n`;
        const tests = `## ` + `${headers[5]}` + `\n\n` + `${data.tests}` + `\n\n`;
        const license = `## ` + `${headers[6]}` + `\n\n` + `${data.license}` + `\n\n`;
        const questions = `## ` + `${headers[7]}` + `\n\n` + `* ` + `${data.qEmail}` + `\n` + `* ` + `https://github.com/` + `${data.qGithub}` + `\n\n`;

        readmeText = [];
        readmeText.push(title);
        readmeText.push(tOC);
        readmeText.push(tableOfContents);
        readmeText.push(description);
        readmeText.push(installation);
        readmeText.push(usage);
        readmeText.push(contributing);
        readmeText.push(tests);
        readmeText.push(license);
        readmeText.push(questions);

        let readmeGen = '';
        for (i = 0; i < readmeText.length; i++) {
            readmeGen += readmeText[i];
        }

        fs.writeFile('sampleREADME.md', readmeGen, (err) => {
            err ? console.error(err) : console.log('README successfully generated.')
        });
    });