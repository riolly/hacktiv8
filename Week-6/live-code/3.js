/**
Hitung Gaji dan Tunjangan Pegawai Negeri
Function ini menerima input berupa kumpulan data pengawai 
isi dari data tersebut adalah informasi berupa kategori, nama, masa kerja, jumlah anak dan gaji.

Function ini akan mengelompokkan data berdasarkan kategori & menghitung gajiTotal dari pegawai, 
berserta tunjangan dan pajak dari data dan kriteria berikut:
  - jika masa kerja pegawai lebih dari 2 tahun, maka mendapat tunjangan sebesar 5% per anak 
       *dengan catatan maksimal 2 (dua) anak per pegawai
  - pajak dihitung sebesar 10% dari gaji yang telah di tambahkan dengan tujangan
  - gajiTotal merupakan gaji yang diterima pengawai setelah di potong pajak

INPUT:
[
  { kategori: 'pns', nama: 'Budi', masaKerja: '1 Tahun', jumlahAnak: 3, gaji: 1000000 },
  { kategori: 'pns', nama: 'Asep', masaKerja: '4 Tahun', jumlahAnak: 0, gaji: 1000000 },
  { kategori: 'tni', nama: 'Mike', masaKerja: '5 Tahun', jumlahAnak: 5, gaji: 1000000 },
  { kategori: 'polisi', nama: 'Ay', masaKerja: '3 Tahun', jumlahAnak: 2, gaji: 3500000 }
]

OUTPUT:
{
  pns: [
    { nama: 'Budi', gaji: 1000000, tunjangan: 0, pajak: 100000, gajiTotal: 900000 },
    { nama: 'Asep', gaji: 1000000, tunjangan: 0, pajak: 100000, gajiTotal: 900000 }
  ],
  tni: [
    { nama: 'Mike', gaji: 1000000, tunjangan: 100000, pajak: 110000, gajiTotal: 890000 }
  ],
  polisi: [
    { nama: 'Ay', gaji: 3500000, tunjangan: 350000, pajak: 385000, gajiTotal: 3115000 }
  ]
} 

RULES
Dilarang menggunakan built-in function kecuali .push() dan Math

*/

function hitungGaji(datas) {
  let sensus = {};
  for (let pegawai of datas) {
    let pekerjaan = pegawai.kategori;
    
    let i = 0;
    let masaKerjaNum = '';
    while (pegawai.masaKerja[i] != ' ') {
      masaKerjaNum += pegawai.masaKerja[i];
      i++;
    }
    masaKerjaNum = Number(masaKerjaNum);

    pegawai.tunjangan = 0;
    if (masaKerjaNum > 2) {
      if (pegawai.jumlahAnak >= 2) {
        pegawai.tunjangan = 2 * (0.05 * pegawai.gaji);
      } else {
        pegawai.tunjangan = pegawai.jumlahAnak * (0.05 * pegawai.gaji);
      }
    }
    pegawai.pajak = 0.1 * (pegawai.gaji + pegawai.tunjangan);
    pegawai.gajiTotal = pegawai.gaji + pegawai.tunjangan - pegawai.pajak;

    delete pegawai.kategori;
    delete pegawai.masaKerja;
    delete pegawai.jumlahAnak;

    if (sensus[pekerjaan] == undefined) {
      sensus[pekerjaan] = [pegawai];
    } else {
      sensus[pekerjaan].push(pegawai);
    }

  }
  return sensus;
}

console.log(
  hitungGaji([
    { kategori: 'pns', nama: 'Iqbal', masaKerja: '1 Tahun', jumlahAnak: 2, gaji: 2000000 },
    { kategori: 'polisi', nama: 'Heri', masaKerja: '9 Tahun', jumlahAnak: 4, gaji: 5000000 },
    { kategori: 'pns', nama: 'Ayu', masaKerja: '7 Tahun', jumlahAnak: 1, gaji: 5000000 },
    { kategori: 'tni', nama: 'Taufiq', masaKerja: '4 Tahun', jumlahAnak: 0, gaji: 6000000 }
  ])
)

/*{
  pns: [
    {
      nama: 'Iqbal',
      gaji: 2000000,
      tunjangan: 0,
      pajak: 200000,
      gajiTotal: 1800000
    },
    {
      nama: 'Ayu',
      gaji: 5000000,
      tunjangan: 250000,
      pajak: 525000,
      gajiTotal: 4475000
    }
  ],
  polisi: [
    {
      nama: 'Heri',
      gaji: 5000000,
      tunjangan: 500000,
      pajak: 550000,
      gajiTotal: 4450000
    }
  ],
  tni: [
    {
      nama: 'Taufiq',
      gaji: 6000000,
      tunjangan: 0,
      pajak: 600000,
      gajiTotal: 5400000
    }
  ]
}*/

