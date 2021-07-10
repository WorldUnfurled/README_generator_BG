const inquirer = require('inquirer'); // Imports inquirer library
const fs = require('fs'); // Imports fs library

const headers = ['Description', 'Installation', 'Usage', 'Contributing', 'Tests', 'License', 'Questions']; // Stores h2's in an array

inquirer 
    .prompt([ // Uses inquirer prompt method
        {   // Title (Direct Input)
            type: 'input',
            name: 'title',
            message: 'What will the title of your work be?'
        },
        {   // Description (Direct Input)
            type: 'input',
            name: 'description',
            message: 'Provide a description of your work.'
        },
        {   // Installation (Direct Input)
            type: 'input',
            name: 'installation',
            message: 'Provide any necessary installation instructions.'
        },
        {   // Usage (Direct Input)
            type: 'input',
            name: 'usage',
            message: 'How is your project used?'
        },
        {   // Contributing (Direct Input)
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project?'
        },
        {   // Tests (Direct Input)
            type: 'input',
            name: 'tests',
            message: 'Detail tests run on your project.'
        },
        {   // License (List)
            type: 'list',
            name: 'license',
            message: 'Choose a license your work will operate under.',
            choices: ['MIT', 'Apache', 'GPL']
        },
        {   // Email (Direct Input)
            type: 'input',
            name: 'qEmail',
            message: 'At what email can you be contacted with questions about your project?'
        },
        {   // Github (Direct Input used in link)
            type: 'input',
            name: 'qGithub',
            message: "What is the Github profile for this project's repo?"
        }
    ]).then((data) => {
        // An empty table of contents takes in strings from the header array and makes an ordered list that takes the user to the corresponding header on click
        let tableOfContents = '';

        for (i = 1; i < headers.length + 1; i++) {
            tableOfContents += `[` + `${i}` + `. ` + `${headers[i-1]}` + `]` + `(` + `#`  + `${headers[i-1]}` + `)` + `\n`;
        }

        // Generates a site associated with the chosen license
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

        // Generates a license badge associated with the chosen license
        let licenseGen = () => {
            if (data.license == 'MIT') {
                var license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            } else if (data.license == 'Apache') {
                var license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            } else {
                var license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            }

            return license;
        }

        // Variables contain headers and respective text with proper formatting
        const title = `# ` + `${data.title}` + `\n\n`; // Title

        const tOC = `\n\n` + `## ` + `Table of Contents` + `\n\n`; // Table of contents

        const description = `## ` + `${headers[0]}` + `\n\n` + `${data.description}` + `\n\n`; // Description

        const installation = `## ` + `${headers[1]}` + `\n\n` + `${data.installation}` + `\n\n`; // Installation

        const usage = `## ` + `${headers[2]}` + `\n\n` + `${data.usage}` + `\n\n`; // Usage

        const contributing = `## ` + `${headers[3]}` + `\n\n` + `${data.contributing}` + `\n\n`; // Contributing

        const tests = `## ` + `${headers[4]}` + `\n\n` + `${data.tests}` + `\n\n`; // Tests

        const license = `## ` + `${headers[5]}` + `\n\n` + // License

        // DO NOT indent this copyright text template
        // It takes prints licensing and contact information stating the title of the project
        `Copyright (C) 2017-2018 ${data.license} < ${licenseSiteGen()} >

This file is part of the ${data.title} project. 
        
The ${data.title} project can not be copied and/or distributed without the express permission of ${data.qGithub} < ${data.qEmail} >.` + `\n\n`;

        const questions = `## ` + `${headers[6]}` + `\n` + `Have questions? Contact me with either link:` + `\n\n` + `* ` + `Email: ` + `${data.qEmail}` + `\n` + `* ` + `Github: ` + `https://github.com/` + `${data.qGithub}` + `\n\n`; // Questions

        readmeText = []; // Stores all text parts to be displayed in the README in an array
        readmeText.push(title); // Pushes title text to readmeText array
        readmeText.push(licenseGen()); // Pushes generated license badge text to readmeText array
        readmeText.push(tOC); // Pushes table of contents header to readmeText array
        readmeText.push(tableOfContents); // Pushes table of contents text to readmeText array 
        readmeText.push(description); // Pushes description text to readmeText array
        readmeText.push(installation); // Pushes installation text to readmeText array
        readmeText.push(usage); // Pushes usage text to readmeText array
        readmeText.push(contributing); // Pushes contributing text to readmeText array
        readmeText.push(tests); // Pushes tests text to readmeText array
        readmeText.push(license); // Pushes license text to readmeText array
        readmeText.push(questions); // Pushes questions text to readmeText array

        // All parts from the readmeText array are concatenated into one formatted string
        let readmeGen = ''; // Holds formatted text ready to be printed to readme
        for (i = 0; i < readmeText.length; i++) {
            readmeGen += readmeText[i]; // Ads each element of readmeText array to readmeGen
        }

        // Creates a markdown file called sampleREADME that is filled with the readmeGen text
        fs.writeFile('sampleREADME.md', readmeGen, (err) => {
            err ? console.error(err) : console.log('README successfully generated.') // An error is logged if there is one, otherwise a success message is logged
        });
    });