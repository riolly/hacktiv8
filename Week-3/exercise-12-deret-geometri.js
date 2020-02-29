/**
 * This function is check wether an array is geometric sequence or not.
 * @example
 /* 
 * SET ratio EQUAL second element DEVIDED first element
 * FOR array length SUBSTRACT one
 *      IF next element DEVIDED current element NOT EQUAL ratio
 *          RETURN false
 *      ENDIF
 * ENDFOR
 * RETURN true;
 * @param {number[]} arr - input array of number
 */
function tentukanDeretGeometri(arr) {
    const ratio = arr[1]/arr[0];
    for (var i = 0; i < arr.length-1; i++) {
        if (arr[i+1] / arr[i] != ratio){
            return false;
        }
    }
    return true;
}
  
// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false