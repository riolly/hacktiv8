/**
 * This function change uppercase letter to lowercase vice versa 
 * @param {string} kalimat input string
 * 
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function tukarBesarKecil(kalimat) {
    const alfabet = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    
    let kalimatArray = [];                              // Make an array from the string
    for (var h = 0; h < kalimat.length; h++) {
        kalimatArray[h] = kalimat[h];
    }

    for (var i = 0; i < kalimatArray.length; i++) {     // Mutate each element
        let j = 0;
        let baris = 0;
        while (true) {                                  // Compare the character to the alphabet start with the lowercase
            if (kalimatArray[i] != alfabet[baris][j]) {     // If it's different, next alphabet
                j++;
                if (baris == 0 && j == 26) {                    // And if it's not found in all lowercase, check the uppercase
                    baris = 1;
                    j = 0;
                } else if (baris == 1 && j == 26) {             // And if it's not found in all uppercase (means symbol or number), character doesn't change
                    break;
                }
            } else {                                        // If it's the same
                if (baris == 0){
                    kalimatArray[i] = alfabet[1][j];            // and lowercase, change to uppercase
                    break;
                } else {
                    kalimatArray[i] = alfabet[0][j];            // and uppercase, change to lowercase 
                    break;
                }
            }
        }
    }
    
    for (var k = 1; k < kalimatArray.length; k++) {     // Join it all in one element
        kalimatArray[0] += kalimatArray[k];
    }
    while (kalimatArray.length != 1) {
        kalimatArray.pop();
    }
    return kalimatArray[0];
}
  
// TEST CASES
console.log(tukarBesarKecil('Hello World'));        // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY'));          // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!'));  // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me'));    // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW'));     // "001-a-3-5tRDyw"

console.log("\nIf there is a way to improve this code, please tell me :)");