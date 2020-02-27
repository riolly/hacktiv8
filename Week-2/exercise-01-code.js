let massa = 600;
let percepatan = 2;
let resultanGaya = massa * percepatan;
console.log("1. Newton's Second Law\n");
console.log("Massa benda:\t\t" + massa +" Kg");
console.log("Percepatan:\t" + percepatan + " m/s2");
console.log("Resultan gaya:\t\t" + resultanGaya + " Newton\n");

// in case we want to calculate average person's force, add below code
let sumberGaya = 3;
let rerataGaya = resultanGaya / sumberGaya;
console.log("Jumlah orang:\t\t" + sumberGaya + " orang");
console.log("Rata-rata gaya/orang:\t" + rerataGaya + " Newton");
console.log("===================================\n");


// 2. Tahun Kabisat
console.log("2. Tahun Kabisat\n");

// *Using IF tree (for readibility)
var tahunIni = 2020;
var statusTahunIni;
if (tahunIni % 4 == 0) {
    if (tahunIni % 100 != 0) {
        statusTahunIni = "tahun kabisat";
    } else {
        if (tahunIni % 400 == 0) {
            statusTahunIni = "tahun kabisat";
        } else {
            statusTahunIni = "tahun biasa";
        }
    }
} else {
    statusTahunIni = "tahun biasa";
}
console.log("Tahun " +tahunIni + " adalah " + statusTahunIni +'.');


// *Using logic (for efficiency)
if ((tahunIni % 4 == 0 && tahunIni % 100 != 0) ||(tahunIni % 4 == 0 && tahunIni % 100 == 0 && tahunIni % 400 == 0)){
    var statusTahunIni2 = "tahun kabisat";
} else {
    var statusTahunIni2 = "tahun biasa";
}
console.log("Tahun " +tahunIni + " adalah " + statusTahunIni +".");
console.log("===================================\n");


// 3. Laundry Day
console.log("3. Laundry Day\n");
var jumlahPakaian = 20;
var pakaianMasuk = 0;
for (i = 0; i < jumlahPakaian; i++) {
    pakaianMasuk++;
    console.log("Pakaian masuk saat ini: " + pakaianMasuk);
}
console.log("Total " + pakaianMasuk + " pakaian sudah masuk semua.");
console.log("===================================\n");