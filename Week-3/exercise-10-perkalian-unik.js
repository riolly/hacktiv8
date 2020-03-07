/**
 * This function create array from input array which each output element is the result of multiplication of all element excluding the indexed one.
 * @example
 /* 
 * SET output array
 * FOR output index LESS THEN input length INCREMENT
 *      SET output element  value TO 1
 *      FOR input index LESS THEN input length INCREMENT
 *          IF output index NOT EQUAL input index
 *              COMPUTE output element value TIMES input element value
 *          ENDIF
 *      END FOR
 * ENDFOR
 * RETURN output array
 * @param {number[]} arr - input array of number
 */
function perkalianUnik(arr) {
    var uniquelyMultiplied = [];
    for (var i = 0; i < arr.length; i++) {
        uniquelyMultiplied[i] = 1;
        for (var j = 0; j < arr.length; j++){
            if (i != j) {
                uniquelyMultiplied[i] *= arr[j];
            }
        }
    }
    return uniquelyMultiplied;
}
  
// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]