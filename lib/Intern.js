const Employee = require('./Employee');

class Intern extends Employee {

    constructor(name, id, email, school) {
        //taking information from employee class
        super(name, id, email)
        //unique items
        this.school = school;
    }

    getSchool (){
        return this.school;
    }
    getRole(){
        return "Intern"
    }
}

module.exports = Intern;