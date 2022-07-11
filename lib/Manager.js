const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        //taking information from employee class
        super(name, id, email)
        //unique items
        this.officeNumber = officeNumber;
    }

    getOfficeNumber (){
        return this.officeNumber;
    }
    getRole(){
        return "Manager"
    }
}

module.exports = Manager;