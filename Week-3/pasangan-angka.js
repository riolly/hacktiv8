/**
 * BEGIN pasanganAgka(numbers)
 *      INIT numberLibrary
 *      INIT numberCount
 *      FOR each element of numbers
 *          INIT position
 *          WHILE numbers NOT EQUAL numberLibrary[position] AND position < numberLibrary length 
 *              INCREMENT position
 *          ENDWHILE
 *          IF position LESS THAN numberLibrary length
 *              INCREMENT numberCount[position]
 *          ELSE 
 *              ADD numbers TO numberLibrary
 *              ADD 1 TO numberCOunt
 *          ENDIF
 *      ENDFOR
 *      SET totalPair TO 0
 *      FOR each element of numberCount
 *          SET totalPair TO totalPair ADD BY FLOOR OF numberCount DEVIDED BY 2
 *      ENDFOR
 *      RETURN totalPair
 * END
 * 
 * @param {number[]} numbers 
 */

function pasanganAngka(numbers){
    // Find frequency of each number
    const numberLib = [];
    const numberCount = [];
    for (let i = 0; i < numbers.length; i++) {
        let j = 0;
        while (numbers[i] != numberLib[j] && j < numberLib.length){ // Check each number until its match the library (not empty)
            j++;
        }
        if (j < numberLib.length) { 
            numberCount[j] += 1; // If match, increase count for that number
        } else {
            numberLib.push(numbers[i]); // If doesnt match to all, add the number to the library & count it once
            numberCount.push(1); 
        }
    }
    // Calculate the pairing posibility
    let totalPair = 0;
    for (let k = 0; k < numberCount.length; k++) {
        totalPair += Math.floor(numberCount[k]/2);
    }
    return totalPair;
    // return (`Number [${numberLib}]\nCount  [${numberCount}]\nTotal Pair: ${totalPair}\n`); // Check frequency for each number
}

console.log(pasanganAngka([6,1,1,1,2,2,1,7])); // 3
console.log(pasanganAngka([10,20,20,10,10,30,50,10,20])); // 3
console.log(pasanganAngka([6,5,2,3,5,2,2,1,1,5,1,3,3,3,5])); //6
console.log(pasanganAngka([44,55,11,15,4,72,26,91,80,14,43,78,70,75,36,83,
    78,91,17,17,54,65,60,21,58,98,87,45,75,97,81,18,51,43,84,54,66,10,44,
    45,23,38,22,44,65,9,78,42,100,94,58,5,11,69,26,20,19,64,64,93,60,96,
    10,10,39,94,15,4,3,10,1,77,48,74,20,12,83,97,5,82,43,15,86,5,35,63,
    24,53,27,87,45,38,34,7,48,24,100,14,80,54
])); // 30
console.log(pasanganAngka([10, 20, 30])); // 0
console.log(pasanganAngka([42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,
    42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,
    42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,
    42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,
    42,42,42,42,42,42,42,42,42,42,42,42
])); // 50
console.log(pasanganAngka([1,1,3,1,2,1,3,3,3,3])); // 4