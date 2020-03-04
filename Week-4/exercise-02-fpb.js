/**
 * This function find the biggest same factor from two numbers.
 * @param {number[]} angka1 first number
 * @param {number[]} angka2 second number
 * 
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function fpb(angka1, angka2) {
    let faktorAngka1 = cariFaktor(angka1);
    let faktorAngka2 = cariFaktor(angka2);
    let faktorSama12 = faktorSama(faktorAngka1, faktorAngka2);
    return faktorTerbesar(faktorSama12);
}
/**
 * Find all factor of number
 * @param {number} bilangan input number
 */
function cariFaktor(bilangan){
    let faktor = [];
    for(let i = 0; i < bilangan; i++){
        if (bilangan % (i+1) == 0){
            faktor.push(i+1);
        }
    }
    return faktor;
}
/**
 * Find the same factor from number's factor
 * @param {number} array1 input array first number's factor
 * @param {number} array2 input array second number's factor
 */
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
/**
 * Find the biggest factor (from already the same factor)
 * @param {number} array input array of number
 */
function faktorTerbesar(array){
    let terbesar = array[0];
    for (var i = 1; i<array.length; i++){
        if (array[i] > terbesar) {
            terbesar = array[i];
        }
    }
    return terbesar;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

console.log("\nIf there is a way to improve this code, please tell me :)");