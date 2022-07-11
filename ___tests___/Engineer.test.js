const Engineer = require(`../lib/Engineer`);

test(`testing constructor`, ()=>{
    const engineer = new Engineer(`Fumi`,123,`fumixer@gmail.com`,`fumixer`);

    expect(engineer.name).toBe(`Fumi`);
    expect(engineer.id).toBe(123);
    expect(engineer.email).toBe(`fumixer@gmail.com`);
    expect(engineer.github).toBe(`fumixer`);
})

test(`testing getName()`, ()=>{
    const engineer = new Engineer(`Fumi`,123, `fumixer@gmail.com`, `fumixer`);

    expect(engineer.getName()).toBe(`Fumi`);
})

test(`testing getID()`, ()=>{
    const engineer = new Engineer(`Fumi`, 123, `fumixer@gmail.com`, `fumixer`);

    expect(engineer.getID()).toBe(123);
})

test(`testing getEmail()`, ()=>{
    const engineer = new Engineer(`Fumi`, 123, `fumixer@gmail.com`, `fumixer`);

    expect(engineer.getEmail()).toBe(`fumixer@gmail.com`);
})

test(`testing getGithub()`, ()=>{
    const engineer = new Engineer(`Fumi`, 123, `fumixer@gmail.com`, `fumixer`);

    expect(engineer.getGithub()).toBe(`fumixer`);
})

test(`testing getRole()`, ()=>{
    const engineer = new Engineer(`Fumi`, 123, `fumixer@gmail.com`, `fumixer`);

    expect(engineer.getRole()).toBe(`Engineer`);
})

