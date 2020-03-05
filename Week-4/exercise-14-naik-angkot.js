/**
 * This function make a report of trip including, name, origin, destination, and fare.
 * @param {Array} arrPenumpang Multidimention array with [name, origin, destination]
 */
function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var journeys = [];
    for (let i = 0; i < arrPenumpang.length; i++) {
        var trip = { // Make the object of trip report
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            biaya: 0
        }
        let awal = 0; // Find the starting point index
        while (trip.naikDari != rute[awal]) {
            awal++;
        }
        let akhir = 0; // Find the destination index
        while (trip.tujuan != rute[akhir]) {
            akhir++;
        }
        trip.biaya = (akhir - awal) * 2000; // Calculate the fare from distance
        journeys.push(trip);
    }
    return journeys;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]