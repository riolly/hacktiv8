/**
 * 
 * Retake Exam
 * 
 * Untuk mengambil ulang suatu ujian akhir semester, seorang student diharuskan memiliki absensi 75% atau lebih.
 * Buatlah suatu program yang akan menghitung hal ini. Program ini akan digunakan untuk mengecek apakah seorang student bisa mengikuti 'retake' suatu ujian atau tidak pada 
 * semester itu. 
 * Namun, jika student telah memiliki surat ijin dari dokter, maka dia tetap boleh mengikuti retake, berapapun absennya.
 * 
 * Program akan menerima input berupa:
 * - Nama Student -> di dalam variabel 'name'
 * - Pelajaran yang diikuti oleh Student tersebut -> di dalam variabel 'subject'
 * - Jumlah kelas yang ada pada pelajaran tersebut (pada satu semester)  -> di dalam variabel 'total_classes'. 
 * - Jumlah kelas yang diikuti oleh Student tersebut -> di dalam variabel 'participated_classes'
 * - Status ijin dokter  -> di dalam variabel 'doctor'
 * 
 * Jika Student boleh mengikuti retake, maka output:
 * '[Nama Student] boleh mengikuti ujian ulang pelajaran [Nama Pelajaran]'
 * 
 * Jika tidak boleh mengikuti retake, maka output:
 * '[Nama Student] tidak boleh mengikuti ujian ulang pelajaran [Nama Pelajaran], karena absensinya [persentase absensi] persen.`
 * 
 * Rules:
 * - Jangan mengubah variabel yang telah diberikan
 * - Hanya diperbolehkan untuk mengubah isi dari variabel-variabel tersebut, pastikan tipe data yang diisi sesuai dengan yang disebutkan di soal
 * - Diperbolehkan menambah variabel baru jika diperlukan
 * - Jumlah kelas yang ada pada pelajaran tersebut (pada satu semester) berisi minimal angka 1, tidak boleh 0.
 * - Nama student dan nama pelajaran selalu memiliki isi, sehingga tidak diperlukan pengecekan nilai kosong untuk variable name dan variable subject.
 * 
 */

var name = 'Alberto'; // silakan berikan nilai string bebas untuk nama muridnya
var subject = 'Fisika'; //silahkan berikan nilai String bebas untuk nama pelajarannya
var total_classes = 20 //Jumlah kelas yang ada pada pelajaran tersebut (pada satu semester) berisi minimal angka 1, tidak boleh 0.
var participated_classes = 10 //silahkan beri nilai angka bebas, tetapi pastikan angka ini tidak melebihi angka pada 'total_classes'
var doctor = false;//silahkan beri nilai boolean bebas

var presentase = participated_classes / total_classes * 100;
// console.log(presentase);
if (presentase >= 75) {
    console.log(`${name} boleh mengikuti ujian ulang pelajaran ${subject}`);
} else {
    if (doctor) {
        console.log(`${name} boleh mengikuti ujian ulang pelajaran ${subject}`);
    } else {
        console.log(`${name} tidak boleh mengikuti ujian ulang pelajaran ${subject}, karena absensinya ${presentase} persen`);
    }
}

//Tulis code disini
// atas seijin dokter