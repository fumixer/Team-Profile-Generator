const Intern = require("../lib/Intern");

test(`testing constructor`, ()=>{
    const intern = new Intern(`Dave`,234,`Davexer@gmail.com`,`Davexer`);

    expect(intern.name).toBe(`Dave`);
    expect(intern.id).toBe(234);
    expect(intern.email).toBe(`Davexer@gmail.com`);
    expect(intern.school).toBe(`Davexer`);
})

test(`testing getName()`, ()=>{
    const intern = new Intern(`Dave`,234, `Davexer@gmail.com`, `Davexer`);

    expect(intern.getName()).toBe(`Dave`);
})

test(`testing getID()`, ()=>{
    const intern = new Intern(`Dave`, 234, `Davexer@gmail.com`, `Davexer`);

    expect(intern.getID()).toBe(234);
})

test(`testing getEmail()`, ()=>{
    const intern = new Intern(`Dave`, 234, `Davexer@gmail.com`, `Davexer`);

    expect(intern.getEmail()).toBe(`Davexer@gmail.com`);
})

test(`testing getSchool()`, ()=>{
    const intern = new Intern(`Dave`, 234, `Davexer@gmail.com`, `Davexer`);

    expect(intern.getSchool()).toBe(`Davexer`);
})

test(`testing getRole()`, ()=>{
    const intern = new Intern(`Dave`, 234, `Davexer@gmail.com`, `Davexer`);

    expect(intern.getRole()).toBe(`Intern`);
})