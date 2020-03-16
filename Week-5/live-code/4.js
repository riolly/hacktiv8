/*
===================
FISH FARM SIMULATOR
===================

[INSTRUCTION]
Buatlah suatu aplikasi untuk mensimulasikan perubahan populasi ikan di tiga peternakan ikan milik Taufiq, Ayu, dan Audrick.

Aplikasi ini menerima input berupa perubahan yang terjadi pada populasi peternakan ikan tersebut. Perubahan ini disimpan di dalam suatu array 'changes' yang mencatat perubahan 
perubahan yang terjadi. Perubahan ini berbentuk string dan memiliki format:
'[Nama peternak][operator][persentase perubahan]'

Contoh perubahan:
-'Ayu+1%' -> Berarti, di peternakan milik Ayu terjadi penambahan populasi ikan sebanyak 1 persen. 
-'Hanif-10%' -> Berarti, di peternakan milik Hanif terjadi pengurangan populasi ikan sebanyak 10 persen.

Di dalam soal sudah disediakan ARRAY OF OBJECTS yang berisi populasi ikan untuk masing-masing peternakan (lihat function di dalam soal).

Tugas kalian adalah mencari tahu berapa jumlah populasi peternakan ikan dari ketiga peternak tersebut setelah melalui perubahan perubahan yang tertera di array 'changes'.

Sebagai output, tampilkan lagi ARRAY OF OBJECTS berisi nama peternak dan populasinya yang baru, sesuai perubahan yang tertera di array 'changes'.

[RULES]
- Tidak ada larangan dalam pengunaan built-in function

*/


function populationSim(changes) {
  var farms = [{
      owner: 'Taufiq',
      population: 100000
    },
    {
      owner: 'Ayu',
      population: 230000
    },
    {
      owner: 'Audrick',
      population: 250000
    }
  ]
  for (let farming of changes) {
    let farmer = '';
    let increment = '';
    let nameFlag = true;
    let change = '';
    for (let changing of farming) {
      if (changing == '+') {
        nameFlag = false;
        change = 'increase';
      } else if (changing == '-') {
        nameFlag = false;
        change = 'decrease';
      } else if (changing == '%') {
        break;
      } else {
        if (nameFlag) {
          farmer += changing;
        } else {
          increment += changing;
        }
      }
    }
    let indexFarmer;
    switch (farmer) {
      case 'Taufiq':
        indexFarmer = 0;
        break;
      case 'Ayu':
        indexFarmer = 1;
        break;
      case 'Audrick':
        indexFarmer = 2;
        break;
    }
    if (change == "increase") {
      farms[indexFarmer].population *= 1 + (Number(increment) / 100);
    } else {
      farms[indexFarmer].population *= 1 - (Number(increment) / 100);
    }
  }
  return farms;
}

console.log(populationSim(['Ayu+5%', 'Audrick+10%', 'Taufiq-3%']))
/**
[
  { owner: 'Taufiq', population: 97000 },
  { owner: 'Ayu', population: 241500 },
  { owner: 'Audrick', population: 275000 }
]
**/

console.log(populationSim(['Taufiq+50%', 'Audrick-50%', 'Ayu-50%']))
/**
[
  { owner: 'Taufiq', population: 150000 },
  { owner: 'Ayu', population: 115000 },
  { owner: 'Audrick', population: 125000 }
]
**/