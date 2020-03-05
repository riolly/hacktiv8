/**
 * This function find the highest score for each class.
 * @param {object[]} students array of object with name, class, score
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function highestScore(students) {
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
    // Create object for each class
    var classObj = [];
    for (let k = 0; k < classType.length; k++) {
        var bestStudent = {
            class: classType[k],
            name: '',
            score: 0
        }
        classObj.push(bestStudent);
    }
    // Find the best score for each class
    for (let l = 0; l < students.length; l++) {
        let m = 0;
        while (students[l].class != classObj[m].class) { // Check the classes
            m++;
        }
        if (students[l].score > classObj[m].score) { // If the score bigger, assign new score & name
            classObj[m].name = students[l].name;
            classObj[m].score = students[l].score;
        }
    }
    return classObj;

}

// TEST CASE
console.log(highestScore([{
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}

console.log("\nIf there is a way to improve this code, please tell me :)");