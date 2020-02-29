
function hitungJumlahKata(kalimat) {
    var kalimatArray = kalimat.split(' ');      // SET array that assign each word by breaking the sentence
    return kalimatArray.length;                 // RETURN the array length
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5