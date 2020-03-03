/**
 * Interasi sejumlah array
 * Buat array untuk menyimpan vokal yang sudah ada
 * Cek apakah element punya karakter yang sama dengan element2 di array vokal.
 * Jika sudah ada, masukkan
 * JIka belum buat array baru dan simpal vokalt
 * @param {string[]} animals array of string
 */
function groupAnimals(animals) {
    var sortedAnimals = [];
    var huruf = [];
    for (var i = 0; i < animals.length; i++) {
        for (var j = 0; j <= huruf.length; j++) {
            if (animals[i][0] == huruf[j]){
                sortedAnimals[j].push(animals[i]);
                // console.log(`Kategori lama ${animals[i]}`);
                break;
            } else if (j == huruf.length) {
                sortedAnimals.push([animals[i]]);
                huruf.push(animals[i][0]);
                // console.log(`Kategori baru ${animals[i]}`);
                break;
            }
        }
        // console.log(sortedAnimals);
        // console.log(huruf);
    }
    return sortedAnimals.sort();
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]