/**
 * This function categorize element of array in 3 catergory and place it insede 2 dimensional array.
 * Each element can only in one category.
 * First check the number can devided by 3 or not. If yes, push to the index 2.
 * If no, if odd push the element in index 1, if even push the element to index 0.
 * @param {number[]} arr array of numbers
 */
function mengelompokkanAngka(arr) {
    var resultArray = [[],[],[]];
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] % 3 == 0) {
            resultArray[2].push(arr[j]);
        } else if (arr[j] % 2 == 0) {
            resultArray[0].push(arr[j]);
        } else if (arr[j] % 2 == 1) {
            resultArray[1].push(arr[j]);
        } 
    }
    return resultArray;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]