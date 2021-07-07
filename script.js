
// DELCARING REQUIREMENTS

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//-----------------------------------------------


//Creates async file writing object

const writeFileAsync = util.promisify(fs.writeFile);

//-------------------------------------------------


const questionNew = () => {
    return inquirer.prompt([



        {
            type: 'list',
            name: 'YoN',
            message: 'Create a new team member?',
            choices: ['Yes',
                'No',
        
            ],
        },
    }


// METHOD TO PROMPT FOR INPUT IN CONSOLE


const questionPerson = () => {
    return inquirer.prompt([



        {
            type: 'list',
            name: 'lisence',
            message: 'What license are you using?   SELECT ONE: ',
            choices: ['Academic Free License v3.0',
                'Apache license 2.0',
                'Artistic license 2.0',
                'Boost Software License 1.0',
                'Boost Software License 1.0',
            ],
        },

        {
            type: 'list',
            name: 'lisence',
            message: 'What license are you using?   SELECT ONE: ',
            choices: ['Academic Free License v3.0',
                'Apache license 2.0',
                'Artistic license 2.0',
                'Boost Software License 1.0',
                'Boost Software License 1.0',
            ],
        },

        {
            type: 'list',
            name: 'lisence',
            message: 'What license are you using?   SELECT ONE: ',
            choices: ['Academic Free License v3.0',
                'Apache license 2.0',
                'Artistic license 2.0',
                'Boost Software License 1.0',
                'Boost Software License 1.0',
            ],
        },


    ]);
};
