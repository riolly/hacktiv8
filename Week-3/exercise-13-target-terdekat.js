/**
 * This function measure the distance between two different symbol (x and o)
 * @description
 * Find the first symbol, second symbol and first position.
 * Find next symbol.
 * IF the symbol the same rewrite the first position.
 * ELSE the object different return second postion (now index) - first position.
 * When loop complete without finding the second symbol, return 0.
 * 
 * @param {string[]} arr string array
 */
function targetTerdekat(arr) {
    var symbol1 = symbol2 = firstFlag = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != ' ') {
            if (arr[i] == symbol1) {
                firstFlag = i ;
            } else if (arr[i] == symbol2) {
                return i - firstFlag;
            } else {
                if (arr[i] == 'x') {
                    symbol1 = 'x';
                    symbol2 = 'o';
                } else if (arr[i] == 'o') {
                    symbol1 = 'o';
                    symbol2 = 'x';
                }
                firstFlag = i;
            }
        } 
    }
    return 0;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2