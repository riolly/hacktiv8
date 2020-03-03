function fpb(angka1, angka2) {
    let faktorAngka1 = cariFaktor(angka1);
    let faktorAngka2 = cariFaktor(angka2);
}

function cariFaktor(bilangan){
    let faktor = [];
    for(var i = 1; i < bilangan -1; i++){
        if (bilangan % (i+1) == 0){
            faktor.push(i+1);
        }
    }
    return faktor;
}

// TEST CASES
// console.log(fpb(12, 16)); // 4
// console.log(fpb(50, 40)); // 10
// console.log(fpb(22, 99)); // 11
// console.log(fpb(24, 36)); // 12
// console.log(fpb(17, 23)); // 1