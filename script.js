
// DELCARING REQUIREMENTS

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./objectClasses/manager');

//-----------------------------------------------


//Creates async file writing object

const writeFileAsync = util.promisify(fs.writeFile);


