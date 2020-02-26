// SET nama
// SET peran
// IF nama EQUAL kosong
    // DISPLAY
// ELSE nama NOT EQUAL kosong
    // IF peran EQUAL kosong
        //DISPLAY
    // ELSE IF peran EQUAL Ksatria
        // DSIPLAY
    // ELSE IF peran EQUAL Tabib
        // DISPLAY
    // ELSE IF peran EQUAL Penyihir    
        // DISPLAY
    // ELSE peran EQUAL anything else
        // DISPLAY jadi programmer aja
// END IF

var nama = "Berto";
var peran = "Satpam";

if (nama.length <= 0){
    console.log("Nama harus diisi!");
} else {
    if (peran.length <= 0){
        console.log(`Halo ${nama}. Pilih peranmu untuk memulai game!`);
    } else if (peran === "Ksatria") {
        console.log(`Selamat datang di Dunia Proxytia, ${nama}.`);
        console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
    } else if (peran === "Tabib"){
        console.log(`Selamat datang di Dunia Proxytia, ${nama}.`);
        console.log(`Halo ${peran} ${nama}, kamu dakan membantu temanmu yang terluka.`);
    } else if (peran === "Penyihir"){
        console.log(`Selamat datang di Dunia Proxytia, ${nama}.`);
        console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log(`Selamat datang di dunia Hacktiv8, ${nama}.`);
        console.log(`Walaupun kamu ${peran}, kamu harus belajar menjadi programmer ${nama}. Ubahlah dunia dengan software!`);
    }
}