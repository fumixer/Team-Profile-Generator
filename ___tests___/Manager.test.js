const Manager = require(`../lib/Manager`);

test(`testing constructor`, ()=>{
    const manager= new Manager(`Chris`,345,`Chrisxer@gmail.com`,`Chrisxer`);

    expect(manager.name).toBe(`Chris`);
    expect(manager.id).toBe(345);
    expect(manager.email).toBe(`Chrisxer@gmail.com`);
    expect(manager.officeNumber).toBe(`Chrisxer`);
})

test(`testing getName()`, ()=>{
    const manager= new Manager(`Chris`,345, `Chrisxer@gmail.com`, `Chrisxer`);

    expect(manager.getName()).toBe(`Chris`);
})

test(`testing getID()`, ()=>{
    const manager= new Manager(`Chris`, 345, `Chrisxer@gmail.com`, `Chrisxer`);

    expect(manager.getID()).toBe(345);
})

test(`testing getEmail()`, ()=>{
    const manager= new Manager(`Chris`, 345, `Chrisxer@gmail.com`, `Chrisxer`);

    expect(manager.getEmail()).toBe(`Chrisxer@gmail.com`);
})

test(`testing getOfficeNumber()`, ()=>{
    const manager= new Manager(`Chris`, 345, `Chrisxer@gmail.com`, `Chrisxer`);

    expect(manager.getOfficeNumber()).toBe(`Chrisxer`);
})

test(`testing getRole()`, ()=>{
    const manager= new Manager(`Chris`, 345, `Chrisxer@gmail.com`, `Chrisxer`);

    expect(manager.getRole()).toBe(`Manager`);
})