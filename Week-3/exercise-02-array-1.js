
var balikString = function(str){
    // Buat variable untuk menyimpan string yang sudah dibalik
    var balikStr = "";
    // Buat loop sejumlah panjang string.
    for (var i = 1; i <= str.length; i++){
        // Tambakah setiap karakter mulai dari yang paling belakang.
        balikStr += str[str.length-i]
    }
    // Keluarkan output hasil string yg dibalik
    return balikStr;
}

// Tampilkan "Hello World!" terbalik dengan menggunakan fungsi
console.log(balikString("Hello Wordl!"));