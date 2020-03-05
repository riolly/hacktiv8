var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr){
    // splice untuk mengganti nama dan provinsi (mulai indeks 1, sebanyak 2)
    arr.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    // splice untuk menghapus hobi dan menambahkan jenis kelamin dan Sekolah
    arr.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(arr);

    // ambil tanggal pada input index 3, split string pada '/'
    var tanggal = arr[3].split("/");
    // ambil bulan dr tanggal indeks ke 1
    var bulan = tanggal[1];
    // tampilkan nama bulan dgn memanggil fungsi gantiBulan
    console.log(gantiBulan(bulan));
    // sort tanggalKebalik secara descending dengan menambahkan parameter fungsi komparasi yg return b-a, kebalikan a-b
    var tanggalKebalik = arr[3].split("/");
    console.log(tanggalKebalik.sort((a, b) => b-a));
    // join tanggal dengan '-'
    console.log(tanggal.join('-'));
    // ambil nama dari input indeks 1 dan ambil string dari index 0 - 14 saja
    var nama = arr[1].slice(0, 15);
    console.log(nama);
}

// Fungsi untuk mengganti bulan berupa angka ke nama bulan
function gantiBulan(month){
    switch (Number(month)){
        case 1:
            month = "Januari";
            break;
        case 2:
            month = "Februari";
            break;
        case 3:
            month = "Maret";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "Mei";
            break;
        case 6:
            month = "Juni";
            break;
        case 7:
            month = "Juli";
            break;
        case 8:
            month = "Agustus";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "Oktober";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "Desember";
            break;
        default :
            month = "Bulan Invalid";
    }
    return month;
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */