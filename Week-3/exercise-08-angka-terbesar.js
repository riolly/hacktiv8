/**
 * This function will give two number next each other with the highest value inside the number.
 * 
 * @example 
/* 
 * SET number String
 * INIT array for every possible number
 * FOR number length MINUS 1
 *      ADD new number to array
 * ENDFOR
 * RETURN element with the highest value
 * @param {Number} num number
 */

function pasanganTerbesar(num) {
    const numString = String(num);
    const numArray = []; 
    for (var i = 0; i < numString.length-1; i++) {
        numArray.push(Number(numString[i]+numString[i+1]));
    }
    return Math.max(...numArray);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99