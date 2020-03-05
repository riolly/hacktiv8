/**
 * This function sort only graduate student (surpasing passing grade) in each class
 * @param {object[]} students 
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function graduates(students) {
    // Scanning for all classes
    var classType = [];
    for (let i = 0; i < students.length; i++) {
        let j = 0;
        while (students[i].class != classType[j]) { // Check class till match
            j++;
            if (j >= classType.length) { // If not found, add the class
                classType.push(students[i].class);
                break;
            }
        }
    }
    // Create object with key from classes
    var classObj = {};
    classObj[classType[0]] = [];
    for (let h = 0; h < classType.length; h++) {
        classObj[classType[h]] = [];
    }
    // Check every student graduate or not
    for (let g = 0; g < students.length; g++) {
        if (students[g].score > 75) { // If surpasing passing grade
            let k = 0;
            while (students[g].class != classType[k]) { // Match the class
                k++;
            }
            delete students[g].class;
            classObj[classType[k]][classObj[classType[k]].length] = students[g]; // Assign the name and score 
        }
    }
    if (students[0] == undefined) { // If empty, make sure nothing left
        classObj = {};
    }
    return classObj;
}

console.log(graduates([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log(graduates([])); //{}

console.log("\nIf there is a way to improve this code, please tell me :)");