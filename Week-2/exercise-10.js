function bandingkanAngka(angka1, angka2) {
    // membandingkan jika angka 2 lebih besar dari angka 1
    if (angka2 > angka1){
        return true;
    // membandingkan jika kedua angka sama
    } else if (angka2 == angka1) {
        return -1;
    // jika angka 1 lebih besar dari angka 2
    } else {
        return false;
    }
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false