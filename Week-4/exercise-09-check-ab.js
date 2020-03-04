/**
 * This function will checkif there is a & b character next to each other even though separated by other characters. 
 * @param {string} string that you want to check for the a & b character.
 */
function checkAB(string) {
    var ab = '';
    // filter only a & b character
    for (var i = 0; i < string.length; i++) {
        if (string[i] == 'a') {
            ab += 'a';
        } else if (string[i] == 'b') {
            ab += 'b';
        }
    }
    // find the 'ab' combination inside the filtered array
    for (var j = 0; j < ab.length-1; j++) {
        if (ab[j]== 'a' && ab[j+1] == 'b'){
            return true;
        }
    }
    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed'));  // true
console.log(checkAB('i am sick'));      // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian'));      // true
console.log(checkAB('bacon and meat')); // false

// Don't forget to smile, my instructor :)