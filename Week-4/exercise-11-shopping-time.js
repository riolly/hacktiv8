/**
 * This function find what item can be buy using the money it has.
 * @param {string} memberId 
 * @param {number} money 
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function shoppingTime(memberId, money) {
    const barangNama = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweeter Uniklooh', 'Casing Handphone'];
    const barangHarga = [1500000, 500000, 250000, 175000, 50000];
    // Make the object
    var shoppingChart = {
        memberId: memberId,
        money: money,
        listPurcashed: [],
        changeMoney: money
    }
    // Check if the remaining money can be used to buy somethings
    for (let i = 0; i < barangHarga.length; i++) {
        if (shoppingChart.changeMoney >= barangHarga[i]) {
            shoppingChart.listPurcashed.push(barangNama[i]);
            shoppingChart.changeMoney -= barangHarga[i];
        }
    }
    // Check if it has memberID and the money is enough
    if (shoppingChart.memberId == '' || shoppingChart.memberId == undefined) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else if (shoppingChart.listPurcashed.length == 0) {
        return "Mohon maaf, uang tidak cukup";
    } else {
        return shoppingChart;
    }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000));
//Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000));
//Mohon maaf, uang tidak cukup
console.log(shoppingTime());
//Mohon maaf, toko X hanya berlaku untuk member saja

console.log("\nIf there is a way to improve this code, please tell me :)");