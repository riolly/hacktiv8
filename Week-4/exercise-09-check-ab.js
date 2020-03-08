/**
 * This function will checkif there is a & b character next to each other even though separated by other characters. 
 * @param {string} string input string
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function checkAB(string) {
    for (let i = 0; i < string.length - 4; i++) {
        if (string[i] == 'a' || string[i] == 'b') { // Find the character a or b
            if (string[i] == 'a' && string[i + 4] == 'b') { // If a and the next 4 character is b
                return true;
            } else if (string[i] == 'b' && string[i + 4] == 'a') { // If b and the next 4 character is a
                return true;
            }
        }
    }
    return false;
}

// TEST CASES
console.log(checkAB('land borrowed'));  // true
console.log(checkAB('i am sick'));      // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian'));      // true
console.log(checkAB('bacon and meat')); // false

console.log("\nIf there is a way to improve this code, please tell me :)");