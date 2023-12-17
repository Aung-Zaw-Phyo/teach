const students = [{
        id: 'std-1',
        name: "Aung Aung",
        email: "aungaung@gmail.com",
        grade: "A"
    },
    {
        id: 'std-2',
        name: "Su Su",
        email: "susu@gmail.com",
        grade: "B"
    },
    {
        id: 'std-3',
        name: "Thiri",
        email: "thiri@gmail.com",
        grade: "C"
    },
    {
        id: 'std-4',
        name: "Min Maung",
        email: "minmaung@gmail.com",
        grade: "B"
    }
];

// const sendMail = (student) => {
//     console.log('Sending ...')
//     console.log("Dear gentleman, ")
//     console.log(student.name + ' is grade ' + student.grade)
//     if (student.grade === "C" || student.grade === "D") {
//         console.log('Please take care of your son!')
//     }
//     console.log('')
// }

// for (let i = 0; i < students.length; i++) {
//     sendMail(students[i])
// }

// {
//     id: 'std-4',
//     name: "Min Maung",
//     email: "minmaung@gmail.com",
//     grade: "D"
// }

const result = students.map((std) => { // return final array with all items
    return std
})

const result1 = students.filter((std) => { // return final array with true item
    return std.grade === 'B' // true
})

const result2 = students.find((std) => { // return value
    return std.grade === 'A' // true
})


console.log(result, result1, result2)