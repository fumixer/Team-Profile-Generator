const Employee = require(`../lib/Employee`);

test(`testing constructor`, ()=>{
    const employee = new Employee(`Fumi`,123, `fumixer@gmail.com`);

    expect(employee.name).toBe(`Fumi`);
    expect(employee.id).toBe(123);
    expect (employee.email).toBe(`fumixer@gmail.com`);
})

test(`testing getName()`, ()=>{
    const employee = new Employee(`Fumi`,123, `fumixer@gmail.com`);

    expect(employee.getName()).toBe(`Fumi`);
})

test(`testing getID()`, ()=>{
    const employee = new Employee(`Fumi`, 123, `fumixer@gmail.com`);

    expect(employee.getID()).toBe(123);
})

test(`testing getEmail()`, ()=>{
    const employee = new Employee(`Fumi`, 123, `fumixer@gmail.com`);

    expect(employee.getEmail()).toBe(`fumixer@gmail.com`);
})

test(`testing getRole()`, ()=>{
    const employee = new Employee(`Fumi`, 123, `fumixer@gmail.com`);

    expect(employee.getRole()).toBe(`Employee`);
})

