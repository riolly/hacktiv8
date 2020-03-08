/**
 * This function find middle value from array of number.
 * @param {number[]} arr input array of number
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function cariMedian(arr) {
    if (arr.length % 2 == 0) { // If even number
        return (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2; // calculate median from average value of two middle number
    } else { // If odd number
        return arr[(arr.length - 1) / 2]; // the middle number is the median
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5]));       // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10]));      // 7
console.log(cariMedian([1, 3, 3]));             // 3
console.log(cariMedian([7, 7, 8, 8]));          // 7.5

console.log("\nIf there is a way to improve this code, please tell me :)");