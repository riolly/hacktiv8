/**
 ==================
 Password Encryptor
 ==================

 Implementasikan program password Encryptor, yang akan mengamankan password kalian agar tidak mudah ditebak oleh orang-orang.
 Password encryptor akan mengambil input berupa sebuah string password, dan menukar masing-masing karakter di dalam string tersebut dengan
 karakter yang lain dengan aturan:

 1. vokal (a, i, u, e, o) akan diubah menjadi huruf berikutnya
 2. konsonan (huruf selain vokal) atau Huruf Uppercase akan diubah menjadi '<'
 3. angka (0-9) akan diubah menjadi angka disebelahnya, namun jika angka tersebut adalah angka 9, maka ubahlah angka tersebut menjadi 0
 4. karakter-karakter spesial '@', '#', '$', '*' akan dibiarkan saja
 
BATASAN INPUT:
- Untuk karakter-karakter spesial yang ada pada keyboard: hanya akan ada 4 macam yang perlu kalian handle, yaitu:
    -@
    -# 
    -$
    -*

Contoh:
1. Input:  'password21'
   Output: '<b<<<p<<32'

2. Input: '#####'
   Output: '#####'

3. Input: 'holmes@ABCDE'
   Output: '<p<<f<@<<<<<'

3. Input: '9thelegend'
   Output: '0<<f<f<f<<'

Rules:
- Boleh menambahkan variabel jika diperlukan
- Dilarang menggunakan built-in function kecuali untuk: 
   -konversi Number to String dan sebaliknya [ contoh: Number(), parseInt(), String() ]  
   -pengecekan karakter tersebut adalah angka atau karakter [ contoh: isNaN(), isInteger() ]
   -boleh menggunakan toUpperCase(), toLowerCase()
 */

var password = 'azexicovub12@34#56$78*90AZEXICOVUB' //silahkan isi dengan testcase/password seperti diatas
var encrypted = '';
for (var i = 0; i < password.length; i++){
   if (isNaN(password[i])){
      switch (password[i]) {
         case 'a':
            encrypted += 'b';
            break;
         case 'e':
            encrypted += 'f';
            break;
         case 'i':
            encrypted += 'j';
            break;
         case 'o':
            encrypted += 'p';
            break;
         case 'u':
            encrypted += 'v';
            break;
         case '@':
         case '#':
         case '$':
         case '*':
            encrypted += password[i];
            break;
         default :
         encrypted += '<';
      }
   } else {
      if (password[i] != 9) {
         encrypted += (Number(password[i]) + 1);
      } else {
         encrypted += 0;
      }
   }
}
console.log(encrypted);

//Tulis program disini