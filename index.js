const inquirer = require('inquirer');
const fs = require('fs');

const headers = ['Description', 'Installation', 'Usage', 'Contributing', 'Tests', 'License', 'Questions'];

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
            choices: ['MIT', 'Apache', 'GPL']
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

        for (i = 1; i < headers.length + 1; i++) {
            tableOfContents += `[` + `${i}` + `. ` + `${headers[i-1]}` + `]` + `(` + `#`  + `${headers[i-1]}` + `)` + `\n`;
        }

        let licenseSiteGen = () => {
            if (data.license == 'MIT') {
                var licenseSite = 'mit.edu';
            } else if (data.license == 'Apache') {
                var licenseSite = 'apache.org';
            } else {
                var licenseSite = 'gnu.org';
            }

            return licenseSite;
        }

        const title = `# ` + `${data.title}` + `\n\n`;

        const tOC = `## ` + `Table of Contents` + `\n\n`;

        const description = `\n\n` + `## ` + `${headers[0]}` + `\n\n` + `${data.description}` + `\n\n`;

        const installation = `## ` + `${headers[1]}` + `\n\n` + `${data.installation}` + `\n\n`;

        const usage = `## ` + `${headers[2]}` + `\n\n` + `${data.usage}` + `\n\n`;

        const contributing = `## ` + `${headers[3]}` + `\n\n` + `${data.contributing}` + `\n\n`;

        const tests = `## ` + `${headers[4]}` + `\n\n` + `${data.tests}` + `\n\n`;

        const license = `## ` + `${headers[5]}` + `\n\n` + 

        `Copyright (C) 2017-2018 ${data.license} < ${licenseSiteGen()} >

This file is part of the ${data.title} project.
        
The ${data.title} project can not be copied and/or distributed without the express permission of ${data.qGithub} < ${data.qEmail} >.` + `\n\n`;

        const questions = `## ` + `${headers[6]}` + `\n\n` + `* ` + `${data.qEmail}` + `\n` + `* ` + `https://github.com/` + `${data.qGithub}` + `\n\n`;

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