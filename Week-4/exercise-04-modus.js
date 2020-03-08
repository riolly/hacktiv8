/**
 * This function find the most frequent number of an array.
 * @param {number[]} arr input array of number
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function cariModus(numbers) {
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
    // Find the most frequent number from count array
    if (numberCount.length == 1) { // If there is only one number
        return -1;
    } else {
        let indexModus = 0;
        let change = false; // To make sure that frequency from all the number not the same
        for (let i = 1; i < numberCount.length; i++) {
            if (numberCount[i] != numberCount[indexModus]) { // If the value is different
                if (numberCount[i] > numberCount[indexModus]) { // And bigger
                    indexModus = i; // Assign the index
                }
                change = true;
            }
        }
        if (change == false) { // If all the number has the same frequency
            return -1;
        } else { // If not, return the most frequent number
            return numberLib[indexModus];
        }
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4]));   // 4
console.log(cariModus([5, 10, 10, 6, 5]));  // 5
console.log(cariModus([10, 3, 1, 2, 5]));   // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7]));    // -1

console.log("\nIf there is a way to improve this code, please tell me :)");