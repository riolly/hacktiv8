/**
 * This function change uppercase letter to lowercase vice versa.
 * @param {string} kalimat input string
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function tukarBesarKecil(kalimat) {
    const alfabet = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

    let kalimatBaru = '';
    for (let i = 0; i < kalimat.length; i++) {
        let j = 0;
        let ketemu = false;
        while (!ketemu) {
            if (kalimat[i] == alfabet[0][j]) { // If character lowercase then
                kalimatBaru += alfabet[0][j]; // change to uppercase
                ketemu = true;
            } else if (kalimat[i] == alfabet[1][j]) { // If character uppercase then
                kalimatBaru += alfabet[1][j]; // change to lowercase
                ketemu = true;
            } else if (j == 25) { // If not a alfabet then
                kalimatBaru += kalimat[i]; // keep the symbol.
                ketemu = true;
            }
            j++;
        }
    }

    return kalimatBaru;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World'));        // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY'));          // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!'));  // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me'));    // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW'));     // "001-a-3-5tRDyw"

console.log("\nIf there is a way to improve this code, please tell me :)");