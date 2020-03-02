/**
 * This function is check wether an array is arithmatic sequence or not.
 * @example
 /* 
 * SET different EQUAL second element SUBSTRACT first element
 * FOR array length SUBSTRACT one
 *      IF next element SUBSTRACT current element NOT EQUAL different
 *          RETURN false
 *      ENDIF
 * ENDFOR
 * RETURN true;
 * @param {number[]} arr - input array of number
 */
function tentukanDeretAritmatika(arr) {
    const different = arr[1]-arr[0];
    for (var i = 0; i < arr.length-1; i++) {
        if (arr[i+1] - arr[i] != different){
            return false;
        }
    }
    return true;
}
  
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false