// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//class and constructors
const Engineer = require(`./lib/Engineer`)
const Intern = require(`./lib/Intern`)
const Manager = require(`./lib/Manager`)

//import template
const template = require(`./src/template`)

// Create empty arrays for team　as place holders
const allEmployees = []

// const employee = new Employee(name, id, email)
// allEmployees.push(employee)

function addManager() {
    inquirer.prompt([
        {
            type: `input`,
            name: `managerName`,
            message: `What is manager's name?`
        },
        {
            type: `input`,
            name: `managerId`,
            message: `What is manager's ID?`
        },
        {
            type: `input`,
            name: `managerEmail`,
            message: `What is manager's Email?`
        },
        {
            type: `input`,
            name: `officeNumber`,
            message: `What is manager's office Number?`
        },
    ]).then(answers => {
        let manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        //
        allEmployees.push(manager);
        menu()
    });
};

 //ask what do they want to do next?
    //Add engineer?
    //add intern?
    //done adding employees?
function menu() {
    inquirer.prompt([
        {
            type:`list`,
            name: `menu`,
            message: `What do you want to add next?`,
            choices: [`Engineer`, `Intern`, `Done adding employees`]
        }
    ]).then(selectedMenu=>{
        switch (selectedMenu.menu) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildHTML();
        }
    });
}

//Create a function to add Engineer
function addEngineer(){
    inquirer.prompt([
        {
            type: `input`,
            name: `engineerName`,
            message: `What is engineer's name?`
        },
        {
            type: `input`,
            name: `engineerId`,
            message: `What is engineer's ID?`
        },
        {
            type: `input`,
            name: `engineerEmail`,
            message: `What is engineer's email?`
        },
        {
            type: `input`,
            name: `github`,
            message: `What is engineer's github ?`
        },
    ]).then(answers => {
        let engineer= new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
    
        allEmployees.push(engineer);
        menu()
    })
}

//Create a function to add Intern
function addIntern() {
    inquirer.prompt([
        {
            type: `input`,
            name: `internName`,
            message: `What is intern's name?`
        },
        {
            type: `input`,
            name: `internId`,
            message: `What is intern's ID?`
        },
        {
            type: `input`,
            name: `einternEmail`,
            message: `What is intern's email?`
        },
        {
            type: `input`,
            name: `school`,
            message: `What is intern's school ?`
        },
    ]).then(answers => {
        //Class should have capital 
        let intern= new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
    
        allEmployees.push(intern);
        menu()
    })
}

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, `index.html`)


//Create a function to wr   ite HTML file
function buildHTML() {
    // Does the dist directory exist? If not, make one.
    if(!fs.existsSync(DIST_DIR)){
        fs.mkdirSync(DIST_DIR)
    }
    console.log("Generating Team Profile.... ");
    fs. writeFileSync(distPath, template(allEmployees), `utf-8`);
}

addManager();