function tukarBesarKecil(kalimat) {
    const alfabet = [
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    ];
    
    let kalimatArray = [];                              // Pindah ke kalimat ke array baru
    for (var h = 0; h < kalimat.length; h++) {
        kalimatArray[h] = kalimat[h];
    }

    for (var i = 0; i < kalimatArray.length; i++) {
        let j = 0;
        let baris = 0;
        while (true) {                                  // Cek karakter dengan setiap karakter dalam alfabet.
            if (kalimatArray[i] != alfabet[baris][j]) {
                j++;
                if (baris == 0 && j == 26) {            // Jika baris lowercase tidak ada, ganti baris yang capital.
                    baris = 1;
                    j = 0;
                } else if (baris == 1 && j == 26) {     // Jika tidak ada dalam array (simbol atau angka), karakter tidak berubah.
                    break;
                }
            } else {
                if (baris == 0){
                    kalimatArray[i] = alfabet[1][j];    // bawah ganti atas
                    break;
                } else {
                    kalimatArray[i] = alfabet[0][j];    // atas ganti bawah
                    break;
                }
            }
        }
    }
    
    let kalimatString = '';                             // Kembalikan ke string
    for (var k = 0; k < kalimatArray.length; k++) { 
        kalimatString += kalimatArray[k];
    }
    return kalimatString;
}
  
// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"