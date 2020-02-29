/**
 * This function will take a string and count the word inside it.
 * @example
 * SET array that assign each word by breaking the sentence
 * RETURN the array length
 * 
 * @param {String} kalimat the sentence
 */
function hitungJumlahKata(kalimat) {
    var kalimatArray = kalimat.split(' ');
    return kalimatArray.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5