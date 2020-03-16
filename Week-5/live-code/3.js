/**
=======================
Morph into 2 Dimensions
=======================

Implementasikan function morph2D yang akan menerima input berupa string, dan mengembalikan output berupa array 2 dimensi yang berisi masing-masing character 
dari input, tetapi dipisah menjadi array 2 dimensi. Namun, array 2 dimensi ini harus memiliki panjang row dan column yang sama.

Singkatnya, row x column harus bisa menampung panjang string input.

Sebagai ilustrasi,
Jika panjang string = 9, maka ukuran output akan menjadi 3x3, karena array 2d 3x3 bisa menampung semua string di input.
Jika panjang string = 4, maka ukuran output akan menjadi 2x2
Jika panjang string = 6, maka ukuran output akan menjadi 3x3, karena array 2d 2x2 tidak bisa menampung semua string input, sehingga row dan column terdekat 
yang bisa menampung seluruh elemen suatu string dengan panjang 6 adalah 3x3. 
Namun, karena nanti output akan kekurangan elemen di inner array nya, maka inner array yang tidak bisa diisi karakter dari input, akan diisi dengan karakter '*'.

# Contoh: 
- Input: '302609005'
  Proses: Karena panjang string adalah 9, maka dia bisa dibagi menjadi 3x3, sehingga outputnya berukuran 3x3 dengan isi inner array masing-masing elemen dari string input.
  Output: [ ['3', '0', '2'], ['6', '0', '9'], ['0', '0', '5'] ]

- Input: 'abc'
  Proses: Karena abc tidak bisa ditampung dalam array 1x1, maka harus di tampung di array 2d 2x2. Karena 'abc' kekurangan satu elemen di 
  salah satu inner array untuk ditampung dalam array 2d 2x2, maka ditambahkan dengan '*' sebagai elemen di inner array kedua untuk melengkapi.
  Output: [ [ 'a', 'b' ], [ 'c', '*' ] ]

RULES:
- Dilarang menggunakan built-in function selain built-in Math dan .push()

*/

function morph2D(text) {
  let dimention = 0; // Find the dimention of the array that will be created
  while (dimention * dimention < text.length) { // The dimention must contain all the element of the text.
    dimention++;
  }
  let textArr = [];
  let h = 0;
  for (let i = 0; i < dimention; i++) { 
    let cell = []; // Create a cell (array)..
    for (let j = 0; j < dimention; j++) { // ..base on the dimention
      if (text[h] != undefined) { // Store the character in the cell
        cell.push(text[h]);
      } else { // If all the character is stored, fill the blank with '*'
        cell.push('*');
      }
      h++;
    }
    textArr.push(cell); // push the cell to the main array
  }
  return textArr;
}

console.log(morph2D('abcdef'))
/**
[ 
  [ 'a', 'b', 'c' ], 
  [ 'd', 'e', 'f' ], 
  [ '*', '*', '*' ] 
]
**/

console.log(morph2D('12345678905'))
/**
[
  [ '1', '2', '3', '4' ],
  [ '5', '6', '7', '8' ],
  [ '9', '0', '5', '*' ],
  [ '*', '*', '*', '*' ]
]
**/

console.log(morph2D('abc'))
/**
[
  ['a', 'b'],
  ['c', '*']
]
**/