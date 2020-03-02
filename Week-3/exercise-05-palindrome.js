// SET polindrome
// FOR sejumlah panjang kata dibagi dua, dibulatkan kebawah.
    // IF karakterkiri EQUAL karakter kanan
        // polindrome is true
    // ELSE
        // polindrome is false
        // BREAK
    // ENDIF
    // Indeks geser ketengah 1 langkah
// ENDFOR
// RETURN polindrome

function palindrome(kata) {
    // pengecekan dilakukan mulai dari ujung kiri dan ujung kanan kata, kemudian bergeser ketengah.
    // sehingga kata dibagi dua bagian
    // untuk kata yang berjumlah ganjil, karakter tengah tidak perlu dicek. 
    for (var i = 0; i < Math.floor(kata.length/2); i++) {
        var palindrome;
        // pengecekan akan bergeser ketengah seiring i bertambah
        if (kata[i] == kata[kata.length-1-i]){
            // jika karakter sama, set palindrome true
            palindrome = true;
        } else {
            // jika karakter beda, palindrome false dan langsung terminate function tidak perlu melakukan cek karakter berikutnya 
            return false;
        }
    }
    return palindrome;
  }
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false