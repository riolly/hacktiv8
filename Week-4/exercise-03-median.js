function cariMedian(arr) {
    if (arr.length % 2 == 0){                                          // Jika jumlah genap 
        return (arr[(arr.length/2)-1] + arr[arr.length/2]) / 2;        // return rata-rata dari array index ke [panjang/2]-1 dan [panjang/2] 
    } else {                                                           // Jika jumlah ganjil
        return arr[(arr.length-1)/2];                                  // Indek tengah
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5