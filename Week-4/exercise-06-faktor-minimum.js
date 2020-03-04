function digitPerkalianMinimum(angka) {
    const faktor = cariFaktor(angka);
    let minDigit = 1 + String(faktor[faktor.length-1]).length;
    for (var i = 1; i < Math.ceil(faktor.length/2); i++) {
        let nextDigit = String(faktor[i]).length + String(faktor[faktor.length-1-i]).length;
        if (nextDigit < minDigit) {
            minDigit = nextDigit; 
        }
    }
    return minDigit;
}

function cariFaktor(bilangan){
    let faktor = [];
    for(let i = 0; i < bilangan; i++){
        if (bilangan % (i+1) == 0){
            faktor.push(i+1);
        }
    }
    return faktor;
}
// digitPerkalianMinimum(16);
// console.log(cariFaktor(90));
// console.log(cariFaktor(20));
// console.log(cariFaktor(179));
// console.log(cariFaktor(1));

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2