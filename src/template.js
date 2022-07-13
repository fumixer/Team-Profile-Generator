const Manager = require("../lib/Manager")

const generateTeam = (allEmployees) => {

    const generateManager = (manager) => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="employee-type">${manager.getName()}</h2>
                <p>Manager</p>
            </div>
            <div class="card-body">
           
                <p>Email: ${manager.getEmail()}</p>
                <p>Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        </div>`
    }

    const generateEngineer = (engineer) => {
        return `  <div class="card">
        <div class="card-header">
            <h2 class="employee-type">${engineer.getName()}</h2>
            <p>Engineer</p>
        </div>
        <div class="card-body">
           
            <p>Email: ${engineer.getEmail()}</p>
            <p>Github: ${engineer.getGithub()}</p>
        </div>
    </div>`
    }

    const generateIntern = (intern) => {
        return ` <div class="card">
        <div class="card-header">
            <h2 class="employee-type">${intern.getName()}</h2>
            <p>Intern</p>   
        </div>
        <div class="card-body">
          
            <p>Email: ${intern.getEmail()}</p>
            <p>School: ${intern.getSchool()}</p>
        </div>
    </div>`
    }




    //save HTML to array
const teamHTML = []

    //javascript to filter and map employees through appropriate function
    teamHTML.push(allEmployees
        .filter(employee => employee.getRole() === `Manager`)
        .map(manager => generateManager(manager) ) 
    )
    teamHTML.push(allEmployees
        .filter(employee => employee.getRole() === `Intern`)
        .map(intern => generateIntern(intern) ) 
        //intern can be multiple people
        .join('')
    )

    teamHTML.push(allEmployees
        .filter(employee => employee.getRole() === `Engineer`)
        .map(engineer => generateEngineer(engineer) ) 
         //Engineer can be multiple people
        .join('')
    )

    //join array together &
    //return result
    return teamHTML.join('');
}

module.exports = allEmployees => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <!-- Add boostrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <!-- add custom css -->
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header>
            <h1 class="col-12 jumbotron text-white mb-3">My team</h1>
        </header>
    
        <main class="container">
          ${generateTeam(allEmployees)}
        </main>
    
       
    </body>
    </html> `
}