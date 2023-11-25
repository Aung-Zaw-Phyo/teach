// Variables

// let name = 'aungzawphyo';
// name = 'suthet';
// const age = 19;


/*
    'let' can update
    'const' cannot update
*/


// opertar 
// boolean => true | false

// let su_age = 19;
// let aung_age = 19;

// const check = su_age <= aung_age; // less than or equal
// let num1 = '2';
// let num2 = 3;
// let num3 = +num1 + +num2

// ---------------- Day 2 ------------------

// const mgmgMark = 80;
// const kokoMark = 60;

// const compareMark = !(mgmgMark < kokoMark);

/*
    ==      => isTrue   (eg => 44 == '44' => true)  | can ignore data type (check value, not data type)
    ===     => isTrue   (eg => 55 === '55'  => true) | check both value and data type

    !=      => isFalse  (eg => 44 != '44' => false)
    !==     => isFalse  (eg => 44 !== '44' => true)

    ||      => OR operator      (eg => 33 == 33 || 44 == 45)  | if all false , return false
    &&      => AND operator     (eg => 33 == 33 && 44 == 45)  | if all true , return true
*/



// --------------- Day 3 ----------------

// let tuntunHeight = 5.6;
// let mgmgHeight = 5.6; // float

// if (mgmgHeight > tuntunHeight) {
//     console.log('Mg Mg is taller than Tun Tun.')
// } else if (tuntunHeight > mgmgHeight) {
//     console.log('Tun Tun is taller than Mg Mg.')
// } else {
//     console.log("Mg Mg's height is same Tun Tun's")
// }


// let answer = 3;

// switch (answer) {
//     case 3:
//         console.log('Answer is number 3.')
//         // code
//         break;
//     case 5:
//         console.log('Answer is number 5.')
//         // code
//         break;
//     case 10:
//         console.log('Answer is number 10')
//         // code
//         break;
//     default:
//         console.log('Answer is not same with our checking number.')
//         break;
// }


// =================== Day 4 ==================

// Array  []
// ===========

// const persons = ['suthet', 'aungaung', 'mgmg'];
//  0           1         2         

// const things = ['orange', 222, true, ['aung', 'mg', [1, 2, 3]], {}, 'playing', []];

// console.log('************* ', things[3][2][2])

// const cities = ['yangon', 'mandalay', 'bago'];

// cities.push('Shan')

// cities.unshift('Pyinoolwin')

// console.log(cities)

// cities.pop()

// cities.shift()

// console.log(cities)

/*
    push    =>  Add element at the last of array
    unshift =>  Add element at the first of array
    pop     =>  Remove element at the last of array
    shift   =>  Remove element at the first of array 
*/