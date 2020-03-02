var nilai = [10, 5, 100, 8, 6, 9, 2, 6, 24, 7, 1, 2];

function sortNumber(array) {
    for (var i = 0; i < array.length-1; i++){
        var buffer = 0;
        for (var j = 0; j < array.length-i-1; j++){     // Permutasi
            if (array[j] > array[j+1]){                 // Jika kanan lebih besar 
                buffer = array[j+1];    // ambil yang besar
                array[j+1] = array[j];  // geser yang kecil
                array[j] = buffer;      // masukkan kembali yang besar
            }
        }
    }
    return array;
}

console.log(sortNumber(nilai));