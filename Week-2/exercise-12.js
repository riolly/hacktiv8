function konversiMenit(menit) {
    var waktu = "";
    // menggunakan fungsi floor untuk mengambil nilai jam yang bulat, membuang desimal.
    waktu += Math.floor(menit/60);
    // menambahkan pembatas ':'
    waktu += ':';
    // jika menit hasil sisa bagi lebih kecil dari 10
    if (menit % 60 < 10) {
        // ditambahkan angka 0 agar format seragam (2 digit menit)
        waktu += '0';
    }
    // tambakan sisa baginya, yang menunjukkan menitnya.
    waktu += menit % 60;
    // return hasil konversi
    return waktu;
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00