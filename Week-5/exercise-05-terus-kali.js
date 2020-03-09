function kaliTerusRekursif(angka) {
    if (angka < 10) {
        return angka;
    } else {
        let hasilKali = 1;
        for (var i = 0; i < String(angka).length; i++) {
            hasilKali *= Number(String(angka)[i]);
        }
        return kaliTerusRekursif(hasilKali);
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6