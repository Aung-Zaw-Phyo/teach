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
    },
    {
        name: "Min Maung",
        email: "minmaung@gmail.com",
        grade: "D"
    }
];

const sendMail = (student) => {
    console.log('Sending ...')
    console.log("Dear gentleman, ")
    console.log(student.name + ' is grade ' + student.grade)
    if (student.grade === "C" || student.grade === "D") {
        console.log('Please take care of your son!')
    }
    console.log('')
}

for (let i = 0; i < students.length; i++) {
    sendMail(students[i])
}