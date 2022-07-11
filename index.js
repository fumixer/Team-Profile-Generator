// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require("fs");

//class and constructors
const Employee = require(`./lib/Employee`)
const Engineer = require(`./lib/Engineer`)
const Intern = require(`./lib/Intern`)
const Manager = require(`./lib/Manager`)

const allEmployees = []

// let name = "steph"
// let id = 50
// let email = 'steph@gmail.com'

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
            name: `managerID`,
            message: `What is manager's ID?`
        },
        {
            type: `input`,
            name: `managerEmail`,
            message: `What is manager's email?`
        },
        {
            type: `input`,
            name: `officeNumber`,
            message: `What is manager's officeNumber?`
        },
    ]).then(answers => {
        this.manager = new this.manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
        //
    });
};

//after addManager, ask what they want next
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
    switch
    }

    

    )
   
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
            name: `engineerID`,
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
            name: `internID`,
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

}

//Create a function to write HTML file
function buildHTML(fileName, data) {
    return fs. writeFileSync(path.join(process.cwd(), fileName), data);
}
v