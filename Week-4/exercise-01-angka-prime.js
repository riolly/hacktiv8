function angkaPrima(angka) {
    if (angka <= 1) {
        return false;
    }
    for (var i = 1; i < angka-1; i++){   
        if (angka % (i+1) == 0){
            return false;
        }
    }
    return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

// Test case -5 - 50
// for (var i = -5; i <= 50; i++){
//     console.log(`${i} ${angkaPrima(i)}`);
// }