function cekPalindrome(bilangan) {                          // INIT fungsi untuk cek bilangan palindrome atau bukan 
    var palindrome;                                             // SET var untuk menampung status bilangan yang dicek
    var bilanganStr = String(bilangan);                         // SET string bilangan supaya setiap digit bisa di cek dengan indeks string  
    var digit = bilanganStr.length;                        // SET jumlah digit bilangan
    for (var i = 0; i < Math.floor(digit/2); i++) {             // FOR setiap penambahan i akan menggeser 'index angka yang dicek' ke tengah, 1 per 1, hingga sampai di tengah.
        if (bilanganStr[i] == bilanganStr[digit-1-i]){            // IF angka ujung kiri EQUAL angka ujung kanan
            palindrome = true;                                          // palindrome true (sementara sampai digit yang diproses)
        } else {                                                        // palindrome false 
            return false;                                              // terminate function, tidak perlu mengecek angka berikutnya
        }                                                           // ENDIF
    }                                                           // ENDFOR
    return palindrome;                                          // RETURN status palindrome
}                                                           // END

function angkaPalindrome(number){                           // INIT fungsi untuk mengecek apakah bilangan 1 digit
    var digit = String(number).length;                          // SET jumlah digit bilangan
    if (digit > 1 || number == 9) {                             // IF digit MORETHAN satu OR bilangan EQUAL 9
        while (!cekPalindrome(number)){                             // WHILE cek bilangan EbilanganQUAL bukan palindrome 
            number++;                                                   // Tambah bilangan
        }                                                           // ENDWHILE
        return number;                                              // RETURN bilangan baru yang palindrome
    } else {                                                    // ELSE digit EQUAL satu
        return number++;                                            // RETURN bilangan palindrome berikutnya EQUAL bilangan berikutnya (9 tidak bisa masuk karena 10 bukan palindrome)
    }                                                           // ENDIF
}                                                           // END

// TEST CASE
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

// console.log('\n'+angkaPalindrome(9));
// console.log(angkaPalindrome(12057312));
// console.log(angkaPalindrome("402845"));
// console.log(angkaPalindrome("12bf3a"));
// console.log(angkaPalindrome(""));