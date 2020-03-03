function fpb(angka1, angka2) {
    let faktorAngka1 = cariFaktor(angka1);
    let faktorAngka2 = cariFaktor(angka2);
    let faktorSama12 = faktorSama(faktorAngka1, faktorAngka2);
    return faktorTerbesar(faktorSama12);
}
// Mencari faktor sebuah bilangan
function cariFaktor(bilangan){
    let faktor = [];
    for(let i = 0; i < bilangan; i++){
        if (bilangan % (i+1) == 0){
            faktor.push(i+1);
        }
    }
    return faktor;
}
// Mencari faktor yang sama
function faktorSama(array1, array2){
    let sama = [];
    for (let i = 0; i < array1.length; i++){
        for (let j = 0; j < array2.length; j++){
            if (array1[i] == array2[j]){
                sama.push(array1[i]);
            }
        }
    }
    return sama;
}
//Mencari faktor yang sama yang terbesar
function faktorTerbesar(array){
    let terbesar = array[0];
    for (var i = 1; i<array.length; i++){
        if (array[i] > terbesar) {
            terbesar = array[i];
        }
    }
    return terbesar;
}
// Contoh proses
// let faktor1 = cariFaktor(36);
// console.log(faktor1);
// let faktor2 = cariFaktor(64);
// console.log(faktor2);
// let sama = faktorSama(faktor1, faktor2)
// console.log(sama);
// let terbesar = faktorTerbesar(sama);
// console.log(terbesar);

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1