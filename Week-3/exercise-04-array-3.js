
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr){
    // splice untuk mengganti nama dan provinsi
    arr.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    // splice untuk menghapus hobi dan menambahkan jenis kelamin dan Sekolah
    arr.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(arr);

    // ambil tanggal pada input index 3, split string pada '/', ambil indeks ke 1 untuk ambil bulannya saja.
    var bulan = arr[3].split("/")[1];
    console.log(bulan);

    
}


dataHandling2(input);