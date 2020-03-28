/**
 * Bioskop PrimeFive baru buka, bioskop ini memutarkan kembali film-film lama dan juga mengadakan promo 
 * terhadap harga tiketnya:
 *   - Penonton yang umurnya di bawah 13 tahun mendapatkan diskon sebesar 30%,
 *   - Penonton yang umurnya di antara 13 tahun - 20 tahun mendapatkan diskon sebesar 20%,
 *   - Penonton yang umurnya di atas 20 tahun mendapatkan diskon sebesar 10%.
 *
 * Semua film di bioskop ini memiliki harga tiket 35.000 rupiah. Tiap pengunjung bisa menonton lebih dari 1 film. 
 * Harganya ekonomis dengan promo dan tergolong murah untuk anak sekolah. Namun beberapa film memiliki batasan 
 * umur untuk 17 tahun keatas.
 * 
 * Sebagai contoh, jika pengunjung berumur 12 tahun dan hendak menonton salah satu dari film berikut ini:
 * - Beauty and the Beast
 * - 500 Days of Summer
 * - Twilight
 *  Maka pihak bioskop tidak mengizinkan pengunjungnya untuk menonton film ini.
 *
 * Buatlah sebuah function untuk mensimulasikan bioskop PrimeFive ini.
 * Function tersebut akan menerima input berupa object yang merepresentasikan pengunjung bioskop. 
 * Object tersebut memiliki nama, umur, dan list film yang akan di toton pengunjung.
 * Output yang diharapkan dari function tersebut adalah total harga tiket setelah promo dari semua film 
 * yang akan ditonton pengunjung.
 *
 * Note:
 *   - Dilarang menggunakan built-in function kecuali .push() dan Math
 *   - Jawaban harus disertai dengan pseudocode!!!!
 */
/**
 * SET biaya in visitor to 0
 * SET jumlahFilm in visitor to 0
 * IF visitor age < 13 THEN 
 *  SET visitor diskon to 0.3
 * ELSE IF visitor age < 20
 *  SET visitor diskon to 0.2
 * ELSE 
 *  SET visitor diskon to 0.1
 * END IF
 * FOR every movie in visitor watchlist
 *  IF visitor age not < 17 AND movie equal to Beauty and the Beast or 500 Days of Summer or Twilight THEN
 *      SET visitor biaya to visitor biaya added by price times one minus visitor diskon
 *  END IF
 * END FOR 
 * RETURN visitor name, biaya, and jumlahFilm;
 */ 
function simulasiBioskop(visitor) {
    visitor.biaya = 0;
    visitor.jumlahFilm = 0;
    if (visitor.age < 13) {
        visitor.diskon = 0.3;
    } else if (visitor.age < 20) {
        visitor.diskon = 0.2;
    } else {
        visitor.diskon = 0.1;
    }
    for (let movie of visitor.watch_list) {
        if (!(visitor.age < 17 && (movie == 'Beauty and the Beast' || movie == '500 Days of Summer' || movie == 'Twilight'))) {
            visitor.biaya += (1 - visitor.diskon) * 35000;
            visitor.jumlahFilm++;
        }
    }
    return `${visitor.name} membayar ${visitor.biaya} untuk menonton ${visitor.jumlahFilm} film`;
    //implementasikan function disini!

}

//Test cases
console.log(
    simulasiBioskop({
        name: 'Acong',
        age: 25,
        watch_list: ['The Expendables', '500 Days of Summer', 'Twilight']
    })
)
// Acong membayar 94500 untuk menonton 3 film.

console.log(
    simulasiBioskop({
        name: 'Irfan',
        age: 10,
        watch_list: ['500 Days of Summer', 'Incredibles', 'Twilight']
    })
)
// Irfan membayar 24500 untuk menonton 1 film.