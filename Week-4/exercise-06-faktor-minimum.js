/**
 * This function find the minimum digit from all factor pair of a number.
 * @param {number} angka input number
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function digitPerkalianMinimum(angka) {
    // Find all factor of a number
    let faktor = [];
    for (let i = 0; i < angka; i++) {
        if (angka % (i + 1) == 0) {
            faktor.push(i + 1);
        }
    }
    let minDigit = 1 + String(faktor[faktor.length - 1]).length; // Initialize min digit from the first and last factor 
    for (let i = 1; i < Math.ceil(faktor.length / 2); i++) {
        const nextDigit = String(faktor[i]).length + String(faktor[faktor.length - 1 - i]).length; // Check for the next pair of factor
        if (nextDigit < minDigit) { // If it's less than the current value
            minDigit = nextDigit; // Assign as new value
        }
    }
    return minDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179));// 4
console.log(digitPerkalianMinimum(1));  // 2

console.log("\nIf there is a way to improve this code, please tell me :)");