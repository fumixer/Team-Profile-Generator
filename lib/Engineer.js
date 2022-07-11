const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name, id, email, github) {
        //taking information from employee class; super()
        super(name, id, email)
        //unique items
        this.github = github;
    }

    getGithub (){
        return this.github;
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;