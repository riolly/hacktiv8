/**
 * This function process purchasing, update stock item, and profit.
 * @example
 * const purchase = [{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, ...]
 * countProfit(purchase);
 * @param {object[]} shoppers name, item, amount
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function countProfit(shoppers) {
  let listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];
  if (shoppers.length == 0) {
    return [];
  }
  // Create all product object
  var stockBarang = [];
  for (var i = 0; i < listBarang.length; i++) {
    var Pembelian = {
      product: listBarang[i][0],
      shoppers: [],
      leftOver: listBarang[i][2],
      totalProfit: 0
    }
    stockBarang.push(Pembelian);
  }
  // Process each purchase
  for (var j = 0; j < shoppers.length; j++) {
    // Check the product that bought
    let indexBarang;
    switch (shoppers[j].product) {
      case 'Sepatu Stacattu':
        indexBarang = 0;
        break;
      case 'Baju Zoro':
        indexBarang = 1;
        break;
      case 'Sweater Uniklooh':
        indexBarang = 2;
        break;
    }
    // If the product doesn't match will all product in stock
    if (indexBarang == undefined) {break;}
    // Update buyer, stock, & profit
    if (shoppers[j].amount <= stockBarang[indexBarang].leftOver) {
      stockBarang[indexBarang].shoppers.push(shoppers[j].name);
      stockBarang[indexBarang].leftOver -= shoppers[j].amount;
      stockBarang[indexBarang].totalProfit += shoppers[j].amount * listBarang[indexBarang][1];
    }
  }
  return stockBarang;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([]));
//[]

console.log("\nIf there is a way to improve this code, please tell me :)");