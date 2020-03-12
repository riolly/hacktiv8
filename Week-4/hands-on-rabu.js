var snack = [{
        name: "Coklat",
        price: 15000
    },
    {
        name: "Permen Gugus",
        price: 4000
    },
    {
        name: "Pringloss",
        price: 16000
    }
]

var name = "Tasya";
var uangPembeli = 50000;
var pajakPersen = 0.01;
var date = "30-01-2020"

var struk = {
    nama: name,
    uang: uangPembeli,
    tanggal: date,
    barang: [],
    pajak: 0,
    total: 0,
    kembalian: 0,
};

function hitungPembelian() {
    struk.pajak = pajakPersen * struk.total;
    struk.total += struk.pajak;
    struk.kembalian = struk.uang - struk.total;
}

// January
for (var j = 0; j < snack.length; j++) {
    struk.barang.push(snack[j]);
}
for (let i = 0; i < snack.length; i++) {
    struk.total += struk.barang[i].price;
}
hitungPembelian();

console.log("Pembelian bulan January");
console.log(struk);

// February
diskon = 2000;
for (let k = 0; k < struk.barang.length; k++) {
    struk.barang[k].price -= diskon;
}
hitungPembelian();

console.log("\nPembelian bulan Februari");
console.log(struk);