var tanggal = 29;
var bulan = 2;
var tahun = 2021;

// Maaf instruktur saya gak lihat commentnya disoal :)
// Ini sekalian saya buatkan tanggalan yang sungguhan.

// Kita tentukan jumlah hari (Tanggal) untuk setiap bulannya
// Bulan Genap jumlah hari = 30, kecuali Februari; Bulan ganjil jumlah hari = 31;

var maxTanggal = "";
// Jika bulan bukan Februari
if (bulan !== 2) {
    // Jika bulan genap maka jumlah hari = 30
    if (bulan % 2 == 0) {
        maxTanggal = 30;
    // Jika bulan ganjil maka jumlah hari = 31
    } else {
        maxTanggal = 31;
    }
// Jika bulan Februari
} else {
    // Jika tahun kabisat maka jumlah hari = 29
    if ((tahun % 4 == 0 && tahun % 100 != 0) ||(tahun % 4 == 0 && tahun % 100 == 0 && tahun % 400 == 0)){
        maxTanggal = 29;
    // Jika tahun merupakan tahun bukan kabisat maka jumlah hari = 28
    } else {
        maxTanggal = 28;
    }
}

// Diperiksa apakah tanggal sesuai dengan jumlah hari dalam bulan tersebut
if (tanggal < 1 || tanggal > maxTanggal) {
    tanggal = "Tanggal Invalid";
}

if (tahun < 1900 || tahun > 2200) {
    tanggal = "Tahun Invalid";
}

switch (bulan){
    case 1:
        bulan = "Januari";
        break;
    case 2:
        bulan = "Februari";
        break;
    case 3:
        bulan = "Maret";
        break;
    case 4:
        bulan = "April";
        break;
    case 5:
        bulan = "Mei";
        break;
    case 6:
        bulan = "Juni";
        break;
    case 7:
        bulan = "Juli";
        break;
    case 8:
        bulan = "Agustus";
        break;
    case 9:
        bulan = "September";
        break;
    case 10:
        bulan = "Oktober";
        break;
    case 11:
        bulan = "November";
        break;
    case 12:
        bulan = "Desember";
        break;
    default :
        bulan = "Bulan Invalid";
        break;
}


console.log(`${tanggal} ${bulan} ${tahun}`);
