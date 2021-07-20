const Manager = require('./objectClasses/manager');
const Engineer = require('./objectClasses/engineer');
const Intern = require('./objectClasses/intern');
const inquirer = require("inquirer")
const fs = require('fs');

var team = [];

function makeManager(){

    inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name of the manager?"
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the id of the manager?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the email of the manager"
        },
        {
            type: "input",
            name: "phoneNumber",
            message: "What is the phone number of the manager"
        }
        ])
        .then((val) =>{

            let manager=new Manager(val.managerID,val.managerName,val.managerEmail,val.phoneNumber)
            team.push({
                role: 'manager',
                id: manager.id,
                name: manager.name,
                email: manager.email,
                phoneNumber: manager.phoneNumber

            })

            makeNewEmployee();

        });


    
}







function makeNewEmployee(){

    inquirer.prompt([
        {
        type:'list',
        name:'employeeType',
        choices: ['Intern', 'Engineer','Exit']

        }



    ]).then((val )=>{

        if(val.employeeType=='Intern'){
            
            makeIntern();
            console.log('ok');

        }

        else if(val.employeeType=='Engineer'){
           
            makeEngineer();
            console.log('ok');
        }

        else{
            console.log('notok')
            process.exit();
           

        }

    });

}


function makeIntern(){

    inquirer
    .prompt([
        {
            type: "input",
            name: "internName",
            message: "What is this intern's name?"
        },
        {
            type: "input",
            name: "internID",
            message: "What is this intern's id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is this intern's email"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school is your intern attending?"
        }
    ])
    .then((val) => {

        let intern = new Intern(val.internID, val.internName, val.internEmail, val.internSchool)

        team.push({

            role: 'intern',
            id: intern.id,
            name: intern.name,
            email: intern.email,
            github: intern.school     

        })
        console.log(team)
        makeNewEmployee()
    })
 



}

function makeEngineer() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of this engineer?"
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is this engineers ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the email of this engineer?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is this engineers Github?"
        }
    ])
    .then((val) => {

        let engineer = new Engineer(val.engineerID, val.engineerName, val.engineerEmail, val.engineerGithub)

        team.push({

            role: 'engineer',
            id: engineer.id,
            name: engineer.name,
            email: engineer.email,
            github: engineer.github     

        })
        console.log(team)
        makeNewEmployee()
    })
}

makeManager();