var nilai = [10, 5, 8, 6, 9, 2, 6, 24, 7, 1, 2];

function sortNumber(array) {
    for (var i = 0; i < array.length-1; i++){
    var less, more = 0;
        for (var j = 0; j < array.length-i-1; j++){
            if (array[j] > array[j+1]){
                less = array[j+1];
                more = array[j];
                // console.log(`J:${j}. ${array[j]} lebih besar ${array[j+1]}`);
            } else {
                less = array[j];
                more = array[j+1];
                // console.log(`J:${j}. ${array[j]} lebih kecil ${array[j+1]}`);
            }
            array[j] = less;
            array[j+1] = more;
            // console.log(array);
        }
        // console.log(i+'\n');
    }
    return array;
}

console.log(sortNumber(nilai));