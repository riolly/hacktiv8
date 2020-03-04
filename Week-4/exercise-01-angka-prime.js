/**
 * This function check wether a number prime or not.
 * @param {number} angka number
 * 
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function angkaPrima(angka) {
    if (angka <= 1) {                   // If the number less than or equal one
        return false;                       // Not a prime number
    }
    for (var i = 1; i < angka-1; i++){  
        if (angka % (i+1) == 0){        // If the number has a factor outside itself and one
            return false;                   // Not a prime number
        }
    }
    return true;                        // If not, prime number
}

// TEST CASES
console.log(angkaPrima(3));     // true
console.log(angkaPrima(7));     // true
console.log(angkaPrima(6));     // false
console.log(angkaPrima(23));    // true
console.log(angkaPrima(33));    // false

console.log("\nIf there is a way to improve this code, please tell me :)");