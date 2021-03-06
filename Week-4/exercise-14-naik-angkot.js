/**
 * This function make a report of trip including, name, origin, destination, and fare.
 * @param {Array} arrPenumpang Multidimention array with [name, origin, destination]
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function naikAngkot(arrPenumpang) {
    const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    const journeys = [];
    for (let i = 0; i < arrPenumpang.length; i++) {
        var trip = { // Make the object of trip report
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            biaya: 0
        }

        let awal = akhir = 0;
        for (var j = 0; j < rute.length; j++) {
            if (rute[j] == trip.naikDari) {
                awal = j;
            } else if (rute[j] == trip.tujuan) {
                akhir = j;
                break;
            }
        }
        trip.biaya = (akhir - awal) * 2000; // Calculate the fare from distance
        journeys.push(trip);
    }
    return journeys;
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
console.log("\nIf there is a way to improve this code, please tell me :)");