/**
 * This fucntion change every character of a string the next one.
 * @param {string} kata input kata
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function ubahHuruf(kata) {
    const alfabet = "abcdefghijklmnopqrstuvwxyza";
    let kataBaru = '';
    for (var i = 0; i < kata.length; i++) {
        let j = 0;
        while (kata[i] != alfabet[j]) {             // Check character until match the alphabet.
            j++;
        }
        kataBaru += alfabet[j+1];                   // Assign the next alphabet to it.
    }
    return kataBaru;
}

// TEST CASES
console.log(ubahHuruf('wow'));          // xpx
console.log(ubahHuruf('developer'));    // efwfmpqfs
console.log(ubahHuruf('javascript'));   // kbwbtdsjqu
console.log(ubahHuruf('keren'));        // lfsfo
console.log(ubahHuruf('semangat'));     // tfnbohbu

console.log("\nIf there is a way to improve this code, please tell me :)");