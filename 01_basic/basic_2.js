const persons = [{
        name: 'Aung Zaw Phyo',
        age: 20,
        email: 'aungzawphyo@gmail.com',
        profession: 'Programmer'
    },
    {
        name: 'Su Thet Naing',
        age: 13,
        email: 'suthetnaing@gmail.com',
        profession: 'Student'
    },
    {
        name: 'Phyo Ei Zin',
        age: 25,
        email: 'phyoeizin@gmail.com',
        profession: 'Designer'
    },
    {
        name: 'Aung Phyo',
        age: 28,
        email: 'aungphyo@gmail.com',
        profession: 'Engineer'
    },
];

// length = 4 , 0 1 2 3
// i = 0 , 1 , 2 , 3

for (let i = 0; i < persons.length; i++) {
    console.log('Name: ', persons[i].name)
    console.log('Age: ', persons[i].age)
    console.log('Email: ', persons[i].email)
    console.log('Profession: ', persons[i].profession)
    console.log('')
}