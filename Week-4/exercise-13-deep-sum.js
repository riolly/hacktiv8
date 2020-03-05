/**
 * This function sum all number in array (max. 3 tier array)
 * @param {number[]} arr array of number
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function deepSum(arr) {
    let total = 0;
    let i = 0; // Use while to sum till the last element
    while (arr[i] != undefined) { // First tier
        // console.log(`=: ${i+1}`);
        let j = 0;
        while (arr[i][j] != undefined) { // Second tier
            // console.log(`-: ${j+1}`);
            let k = 0;
            while (arr[i][j][k] != undefined) { // Third tier
                // console.log(` : ${k+1}`);
                total += arr[i][j][k];
                k++;
            }
            j++;
        }
        i++;
    }
    if (arr[0] == undefined) {
        return "No number";
    } else {
        return total;
    }
}

//TEST CASE
console.log(deepSum([
    [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
    ],
    [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
    ],
    [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
    ]
])); // 316

console.log(deepSum([
    [
        [20, 10],
        [15],
        [1, 1]
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [2],
        [9, 11]
    ],
    [
        [3, 5, 1],
        [1, 5, 3],
        [1]
    ],
    [
        [2]
    ]
])); // 156

console.log(deepSum([])); // No number

console.log("\nIf there is a way to improve this code, please tell me :)");