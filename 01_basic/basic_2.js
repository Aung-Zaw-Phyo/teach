const students = [{
        name: "Aung Aung",
        email: "aungaung@gmail.com",
        grade: "A"
    },
    {
        name: "Su Su",
        email: "susu@gmail.com",
        grade: "B"
    },
    {
        name: "Thiri",
        email: "thiri@gmail.com",
        grade: "C"
    }
];

const sendMail = (student) => {
    console.log('Sending ...')
    console.log("Dear gentleman, ")
    console.log(student.name + ' is grade ' + student.grade)
    console.log('')
}

for (let i = 0; i < students.length; i++) {
    // console.log("Dear gentleman, ")
    // console.log(students[i].name + ' is grade ' + students[i].grade)
    // console.log('')
    sendMail(students[i])
}