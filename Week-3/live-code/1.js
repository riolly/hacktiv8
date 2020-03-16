/*
Tulislah Pseudocode untuk memecahkan kasus berikut:

Conan ingin mencari anggota sindikat mafia dari Sicilia. Sindikat tersebut memiliki berbagai macam pangkat anggota diantaranya:
-Don
-Underboss
-Capo

Untuk mengekspos grup ini, dia akan membuat program yang menganalisa ciri-ciri seseorang berdasarkan beberapa variabel.
Setelah menganalisa ciri-ciri tersebut,program akan mengeluarkan output apakah orang tersebut ciri-cirinya mirip dengan salah satu anggota sindikat mafia dengan pangkat yang disebutkan sebelumnya.
Program akan menerima input sebagai berikut:
-Nama (String)
-Umur (Number)
-Tempat Tinggal (String)
-Uang Tabungan dalam dollar (Number)
 
Berikut ini ciri-ciri dari masing-masing pangkat di dalam sindikat tersebut. Untuk dicurigai sebagai seorang anggota mafia yang memiliki [pangkat], orang tersebut harus memenuhi:

Don
-Biasanya berumur diatas 40 tahun
-Tinggal di Nevada, New York, atau Havana
-Tabungannya sudah dipastikan diatas 10 juta dollar

Underboss
-Biasanya berumur 25 - 40 tahun
-Tinggal di New Jersey, Manhattan, atau Nevada
-Tabungannya 1 juta dolar sampai 2 juta dolar tidak kurang tidak lebih

Capo
-Biasanya berumur 18 - 24 tahun
-Tinggal di California, Detroit, atau Boston
-Tabungannya < 1 juta dolar


Setelah menganalisa orang tersebut, program akan mengeluarkan output:
1. Jika dia adalah seorang anggota mafia yang memiliki [pangkat] (salah satu dari Don, Underboss, Capo)

'[Nama] kemungkinan adalah seorang anggota mafia dengan [pangkat].'

2. Jika orang tersebut tidak memenuhi syarat-syarat tersebut, maka program akan mengeluarkan output:

'[Nama] tidak mencurigakan.

*/

/**
 * SET nama
 * SET umur
 * SET tinggal
 * SET tabungan
 * 
 * INIT pangkat
 * IF umur MORE THAN 40 AND (tinggal EQUAL Nevada OR tinggal EQUAL New York OR tinggal EQUAL Havana) AND Tabungan MORE THAN 10 juta dollar
 *      SET pangkat EQUAL Don
 * ELSE IF (umur MORE THAN EQUAL 25 AND umur LESS THAN EQUAL 40) AND (tinggal EQUAL California OR tinggal EQUAL Detroit OR tinggal EQUAL Nevada) AND (tabungan MORE THAN EQUAL 1 juta dollar AND tabungan LESS THAN EQUAL 2 juta dollar)
 *      SET pangkat EQUAL Underboss
 * ELSE IF (umur MORE THAN EQUAL 18 AND umur LESS THAN OR EQUAL 24) AND (tinggal EQUAL California OR tinggal EQUAL Detroit OR tinggal EQUAL Boston) AND tabungan LESS THAN EQUAL 1 juta dollar
 *      SET pangkat EQUAL Capo
 * ELSE 
 *      RETURN DISPLAY nama tidak mencurigakan'
 * ENDIF
 * RETURN DISPlAY nama kemungkinan adalah seorang anggota mafia dengan pangkat'
 * 
 */
//Tulis Pseudocode/Algoritma disini
