var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];

function dataHandling(arr) {
    // Tampilkan data sesuai kategori, acces dengan index array
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