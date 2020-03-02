var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];
/**
// Cara pertama yang terlalu detail. Hiraukan saja.
function dataHandling(arr) {
    // Akses input array menggunakan dua looping karena array 2 dimensi.
    // Buat kategori untuk dipasangkan dengan data array input
    var kategori = ["Nomer ID", "Nama Lengkap", 'TTL', 'Hobi'];
    // Buat perulangan untuk setiap entry data
    for (var i = 0; i < arr.length; i++){
        // inisialisasi var penggeser
        var geser = 0;
        // di dalam setiap entri data, lakukan perulangan untuk mengakses setiap kategori (nama dst)
        for (var j = 0; j < kategori.length; j++){
            // karena TTL yang mengambil dua array pada input maka dibedakan dengan if.
            if (kategori[j] === "TTL"){
                // tampilkan TTL, tempat, dan tanggal
                console.log(`${kategori[j]} : ${arr[i][j+geser]}, ${arr[i][j+geser+1]}`);
                // var geser ditambah 1 karena hobi yg pada kategori indeks 3 berpasangan dengan input indeks 4
                geser+=1;
            } else {
                // tampilkan kategori, input
                console.log(`${kategori[j]} : ${arr[i][j+geser]}`);
            }
        }
    }
}
*/

function dataHandling(arr) {
    for (var i = 0; i < input.length; i++) {
        console.log(`
        Nomer ID: ${arr[i][0]}
        Nama Lengkap: ${arr[i][1]}
        TTL: ${arr[i][2]} ${arr[i][3]}
        Hobi: ${arr[i][4]}
        `);
    }
}

dataHandling(input);