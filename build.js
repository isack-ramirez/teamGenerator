const Manager = require('./objectClasses/manager');
const Engineer = require('./objectClasses/engineer');
const Intern = require('./objectClasses/intern');
const inquirer = require("inquirer")
const fs = require('fs');

var team = [];

function makeManager() {

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
        .then((val) => {

            let manager = new Manager(val.managerID, val.managerName, val.managerEmail, val.phoneNumber)
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







function makeNewEmployee() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            choices: ['Intern', 'Engineer', 'Exit', "Show current employees (json)"]

        }



    ]).then((val) => {

        if (val.employeeType == 'Intern') {

            makeIntern();


        }

        else if (val.employeeType == 'Engineer') {

            makeEngineer();

        }

        else if (val.employeeType == 'Show current employees (json)') {
            console.log(team);
            makeNewEmployee();
        }

        else {
            makePage();
            


        }

    });

}


function makeIntern() {

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
                school: intern.school

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


//for testing
makeManager();


// now we build html

var htmlBase = `

<!DOCTYPE html>

<html>

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

        <link rel="stylesheet" href="./style.css">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"></script>

</head>


<body>

<div class="row py-3" id="titleRow">
<div class=" col 12 justify-content-center d-flex py-3" id="titleBar">

    <h3>Team Generator!</h3>

</div>

</div>

<div class='col-12 justify-content-center d-flex py-3'>
    








`;

let count=0;

function appendEmployees() {

    let count=0;
    for (let i = 0; i < team.length; i++) {
        
        console.log(count);
    
        


        if (team[i].role == 'manager') {

            let thisManager = `
            <div class="card border-danger py-1" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${team[i].name}</li>
    <li class="list-group-item">Role: ${team[i].role}</li>
    <li class="list-group-item">ID No. ${team[i].id}</li>
    <li class="list-group-item">Email : ${team[i].email}</li>
    <li class="list-group-item">Phone No. : ${team[i].phoneNumber}</li>
  </ul>
</div>
            
            `
            fs.appendFile('./index.html',thisManager, 
            function(err,result){

                if(err){console.log(err)};
            });


        }


        else if (team[i].role == 'engineer') {

            let thisEngi = `
            <div class="card border-primary py-1" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${team[i].name}</li>
    <li class="list-group-item">Role: ${team[i].role}</li>
    <li class="list-group-item">ID No. ${team[i].id}</li>
    <li class="list-group-item">Email : ${team[i].email}</li>
    <li class="list-group-item">Github : ${team[i].github}</li>
  </ul>
</div>
            
            `
            fs.appendFile('./index.html',thisEngi, 
            function(err,result){

                if(err){console.log(err)};
            });


        }

        
        else if (team[i].role == 'intern') {

            let thisIntern = `
            <div class="card border-success py-1" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${team[i].name}</li>
    <li class="list-group-item">Role: ${team[i].role}</li>
    <li class="list-group-item">ID No. ${team[i].id}</li>
    <li class="list-group-item">Email : ${team[i].email}</li>
    <li class="list-group-item">School : ${team[i].school}</li>
  </ul>
</div>
            
            `
            fs.appendFile('./index.html',thisIntern, 
            function(err,result){

                if(err){console.log(err)};
            });


        }

        if(count==2){
            
            
            fs.appendFile('./index.html',`
            
                </div>
                <div class='col-12 justify-content-center d-flex py-5'>
            
            
            `, 
            function(err,result){

                if(err){console.log(err)};
            });
            count=-1;

        }

      





        count++;


    }
    


}


function makePage() {
    fs.writeFile('./index.html', htmlBase, function (err, result) {
        if (err) console.log('error', err);
        else {
            appendEmployees();

        }
    });

}









