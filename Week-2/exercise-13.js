function xo(str) {
    // buat variable untuk menyimpan jumlah x
    var xCount = 0;
    // buat variable untuk menyimpan jumlah o
    var oCount = 0;
    // buat loop untuk mengevaluasi setiap karakter sejumlah panjang string.
    for (var i = 0; i < str.length; i++) {
        // jika karakter bernilai x maka xCount ditambah 1 
        if (str[i] == 'x') {
            xCount++;
        // jika karakter bernilai o maka oCount ditambah 1, menggunakan else if agar karakter selain o tidak dihitung o
        } else if (str[i] == 'o') {
            oCount++;
        }
    }
    // Bandingkan jumlah x dan o
    if (xCount == oCount) {
        // jika sama return true
        return true;
    } else {
        // jika beda return false
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
