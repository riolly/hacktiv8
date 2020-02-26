// 1. Menyusun Barisan Bintang
console.log("1. Menyusun Barisan Bintang");

var row1 = 5;
for (var i = 0; i < row1; i++) {
    console.log("*");
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log("\n2. Menyusun Barisan Bintang Dengan Nested Looping");

var rows2 = 5;
var str2 = "";
for (var i = 0; i < rows2; i++) {
    for (var j = 0; j < rows2; j++){
        str2 += '*';
    }
    console.log(str2);
    str2 = "";
}
// Nested loop tidak perlukan karena penentuan jumlah bintang hanya perlu sekali.
// Jika dilakukan nested looping maka proses penambahan bintang akan terjadi berulang-ulang dan perlu menghapus untuk setiap barisnya.
// for (var i = 0; i < rows2; i++){
//     str2 += '*';
// }
// for (var i = 0; i < rows2; i++) {
//     console.log(str2);
// }


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log("\n3. Menyusun Barisan Tangga Bintang Dengan Nested Looping");

var rows3 = 5;
var str3 = "";
for (var i = 0; i < rows3; i++) {
    for (var j = 0; j <= i; j++) {
        str3 += '*';
    }
    console.log(str3);
    str3 = "";
}