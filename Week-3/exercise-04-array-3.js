var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr){
    // splice untuk mengganti nama dan provinsi
    arr.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    // splice untuk menghapus hobi dan menambahkan jenis kelamin dan Sekolah
    arr.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(arr);

    // ambil tanggal pada input index 3, split string pada '/', ambil indeks ke 1 untuk ambil bulannya saja.
    var bulan = (arr[3].split("/")[1]);
    console.log(bulan);

    // tampilkan nama bulan dgn memanggil fungsi untuk mengganti dari angkar ke literal
    console.log(gantiBulan(bulan));
}

// Men
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