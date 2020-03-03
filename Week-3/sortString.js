/**
 * This function sort array of string descending or ascending. Space and multiple word can be handle.
 * 
 * @param {string[]} array of string
 * @param {string} order 'ascending' or 'descending'
 */
function sortString(array, order = "ascending"){
    for (let h = 0; h < array.length -1; h++){
        // console.log(`\nIterasi ke-${h+1}`);                                                                                              // Uncomment to show the process
        for (let i = 0; i < array.length-1-h; i++){
            let flag = false;
            let j = 0;
            while (!flag && array[i] != array[i+1]){
                let buffer = '';
                if (order == "ascending") {
                    // karakter kiri = karakter kanan, cek karakter berikutknya        
                    if (array[i][j] == array[i+1][j]){
                        // console.log(`(${array[i][j]}) ${array[i]} vs (${array[i+1][j]}) ${array[i+1]}: karakter berikutnya`);                // Uncomment to show the process
                        j++;

                    // (kiri < kanan && bukan spasi) || (kiri kehabisan karakter) || (kanan = spasi)
                    } else if ((array[i][j] < array[i+1][j] && array[i][j] != ' ') || array[i][j] === undefined || array[i+1][j] == ' '){
                        // console.log(`(${array[i][j]}) ${array[i]} vs (${array[i+1][j]}) ${array[i+1]}: tidak berubah`);                      // Uncomment to show the process
                        flag = true;

                    // (kiri > kanan && bukan spasi) || (kanan kehabisan karakter) || (kiri = spasi)
                    } else if ((array[i][j] > array[i+1][j] && array[i+1][j] != ' ') || array[i+1][j] === undefined || array[i][j] == ' '){
                        // console.log(`(${array[i][j]}) ${array[i]} vs (${array[i+1][j]}) ${array[i+1]}: tukar posisi`);                       // Uncomment to show the process
                        buffer = array[i];
                        array[i] = array[i+1];
                        array[i+1] = buffer;
                        flag = true;
                        // console.log(array);
                    }
                // kebalikan ascending
                } else if (order == "descending") {
                    if (array[i][j] == array[i+1][j]){
                        // console.log(`(${array[i][j]}) ${array[i]} vs (${array[i+1][j]}) ${array[i+1]}: karakter berikutnya`);                // Uncomment to show the process
                        j++;
            
                    } else if ((array[i][j] < array[i+1][j] && array[i][j] != ' ') || array[i][j] === undefined || array[i+1][j] == ' '){
                        // console.log(`(${array[i][j]}) ${array[i]} vs (${array[i+1][j]}) ${array[i+1]}: tukar posisi`);                       // Uncomment to show the process
                        buffer = array[i];
                        array[i] = array[i+1];
                        array[i+1] = buffer;
                        flag = true;
                        // console.log(array);

                    } else if ((array[i][j] > array[i+1][j] && array[i+1][j] != ' ') || array[i+1][j] === undefined || array[i][j] == ' '){
                        // console.log(`(${array[i][j]}) ${array[i]} vs (${array[i+1][j]}) ${array[i+1]}: tidak berubah`);                      // Uncomment to show the process
                        flag = true;
                    }
                } else {
                    return "invalind order parameter";
                }
            }
        }
    }
    return array;
}

let input = ["badak", "kuda nil", "unta", "kumbang", "kudaabab", "jerapah", "singa", "kuda", "kuda hitam"];
console.log(sortString(input, 'ascending'));
console.log(sortString(input, 'descending'));