/**
 * Kalian ditugaskan untuk membuat sebuah program yang akan dipakai Bandara Internasional Soekarno-Hatta untuk memeriksa apakah seseorang merupakan suspect 
 * dari suatu penyakit berbahaya yang baru saja mewabah akhir-akhir ini.
 * Program akan menerima input berupa object yang merepresentasikan penumpang dengan format seperti berikut:
{
    name: (string),
    id: (Number),
    temperature: (Number),
    travelHistory: [] (Array of Strings),
}
 * Program ini akan mengevaluasi apakah orang ini merupakan suspect dari penyakit ini atau tidak, dan mengeluarkan output berupa string. 
 * Berikut ini adalah kondisi-kondisi yang akan di handle program ini:
 * - Jika suhu tubuhnya diatas 35 derajat dan dia pernah mengunjungi salah satu dari 4 negara berikut: 'China', 'Japan', 'Korea', dan 'Singapore'
 *   pada travel historynya, maka dia dinyatakan sebagai "Suspect".
 * - Jika suhu tubunya tidak diatas 35 derajat, maka dia tidak apa-apa dan dinyatakan "Healthy".
 * - Namun, jika suhunya tidak diatas 35 derajat tetapi dia pernah berkunjung ke 4 negara diatas, maka dia dinyatakan sebagai seorang "Potential Carrier".
 * - Jika suhu tubuhnya tinggi tetapi dia tidak pernah berkunjung ke 4 negara tersebut maka dia hanya sakit, dan dinyatakan "Sick".
 * 
 * Output yang dikeluarkan program ini memiliki format sebagai berikut:
 * "Passenger [id] [name] [status]"
 * 
 * dimana status bisa berupa:
 * [status] : Suspect, Healthy, Potential Carrier, Sick 
 * 
 * 
 * RULES
 * - Dilarang menggunakan built-in function kecuali .push()
 *
 */

function evaluatePassenger(passenger) {
    let country = ['China', 'Japan', 'Korea', 'Singapore'];
    let travel = false;
    for (let i of passenger.travelHistory) {
        for (let j of country) {
            if (i == j) {
                travel = true;
                break;
            }
        }
    }
    let status = '';
    if (passenger.temperature >= 35) {
        if (travel == true) {
            status = 'Suspect';
        } else {
            status = 'Sick';
        }
    } else {
        if (travel == true) {
            status = 'Potential Carrier';
        } else {
            status = 'Healthy';
        }
    }
    return `Passanger ${passenger.id} ${passenger.name} ${status}`
}

console.log(evaluatePassenger({ name: 'Budi', id: 50, temperature: 40, travelHistory: ['Russia', 'Japan'] })) //Passenger 50 Budi Suspect
console.log(evaluatePassenger({ name: 'Tono', id: 10, temperature: 40, travelHistory: ['Morocco', 'France', 'Burma'] })) //Passenger 10 Tono Sick
console.log(evaluatePassenger({ name: 'Tsubasa', id: 15, temperature: 30, travelHistory: ['Brazil'] })) //Passenger 15 Tsubasa Healthy