var barang=[
    {
        nama:"Roti",
        jenis: [
            {
                isi:"Coklat",
                harga:13000
            },
            {
                isi:"Keju",
                harga:11000
            },
            {
                isi:"Kacang",
                harga:8000
            }
        ]
    },
    {
        nama: "Gorengan",
        jenis: [
            {
                isi: "Tempe",
                harga: 2000
            },
            {
                isi: "Tahu",
                harga: 2500
            },
            {
                isi: "Risoles",
                harga: 4000
            }
        ]
    }
]


for (let i in barang) {
    console.log(`${barang[i].nama}:`)
    for (let value of barang[i].jenis){
        console.log(`Isi ${value.isi}, harga ${value.harga}`);
    }
}

// for (let i in barang) {
//     console.log(`Jenis ${barang[i].nama}:`)
//     for (let j in barang[i].jenis) {
//         // console.log(barang[i].jenis[j].isi);
//         // console.log(barang[i].jenis[j].harga);
//         console.log(`Isi ${barang[i].jenis[j].isi} harga ${barannameg[i].jenis[j].harga}`)
//     }
// }