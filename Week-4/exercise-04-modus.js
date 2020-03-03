function cariModus(arr) {
    let number = [arr[0]];
    let count = [1];

    for (var i = 1; i < arr.length; i++){
        let j = 0;
        while (true){
            if (arr[i] == number[j]) {        // Jika angka sama tambah jumlah angka tersebut
                count[j] = count[j]+1;
                break;
            } else {
                if (j < count.length-1) {       // Jika berbeda dan bukan pengecekan terakhir maka cek angka berikutnya
                    j++;
                } else {
                    number[j+1] = arr[i];     // Jika berbeda dan tidak nemu juga angka yang sama sampai diujung maka masukkan angka ke dalam lib.
                    count[j+1] = 1;
                    break;
                }
            }
        }
    }

    if (count.length == 1) {
        return -1;
    } else {
        let terbanyak = count[0];
        let angkaTerbanyak = number[0];
        for (var i = 1; i < count.length; i++){
            if (count[i] > terbanyak) {
                terbanyak = count[i];
                angkaTerbanyak = number[i];
            }
        }
        return angkaTerbanyak;
    }
    // console.log(number);
    // console.log(count);
    // console.log(terbanyak);
    // console.log(angkaTerbanyak);
}

// cariModus([10, 4, 6, 10, 4, 5, 10, 5, 7]);

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

console.log(cariModus([10, 3, 1, 2, 5, 3, 2, 3]));