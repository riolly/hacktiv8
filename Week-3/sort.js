/**
 * This function sort array of number ascending or descending.
 * @example
 * var input = [...];
 * sortNumber(input, "ascending");
 * sortNumber(input, "descending");
 * @param {number[]} array number
 * @param {string} order ascending | descending 
 */
function sortNumber(array, order = 'ascending') {
    for (var i = 0; i < array.length-1; i++){
        var buffer = 0;
        for (var j = 0; j < array.length-i-1; j++){         // Permutasi
            if (order == "ascending") {
                if (array[j] > array[j+1]){                 // Jika kanan lebih besar 
                    buffer = array[j+1];    // ambil yang besar
                    array[j+1] = array[j];  // geser yang kecil
                    array[j] = buffer;      // masukkan kembali yang besar
                }
            } else if (order == "descending") {
                if (array[j] < array[j+1]){                 // Jika kiri lebih besar 
                    buffer = array[j+1];    // ambil yang kecil
                    array[j+1] = array[j];  // geser yang besar
                    array[j] = buffer;      // masukkan kembali yang kecil
                }
            }
        }
    }
    return array;
}

var nilai = [10, 5, 100, 8, 6, 9, 2.4, 6, 24, 7, 1, 2];
console.log(sortNumber(nilai, 'descending'));