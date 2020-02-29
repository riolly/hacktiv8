/**
 * This funtion return the average value of a given numbers (in array).
 * @example
 * 
 * SET total
 * FOR input array length
 *      ADD array element TO total
 * RETURN rounded average value
 * @param {number[]} arr array of number
 */
function cariMean(arr) {
    let total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return Math.round(total / arr.length);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
// Kak ini harusnya 3 karena 2.3 kalau dibulatkan keatas jadi 3
// Yaudah saya pakai .round deh, gak pakai .ceil
console.log(cariMean([1, 3, 3])); // 2 
console.log(cariMean([7, 7, 7, 7, 7])); // 7