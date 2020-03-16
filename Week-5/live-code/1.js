/*
 * Implementasikan fixArray, yang menerima input berupa array dan mengembalikan output berupa array yang sudah dibetulkan. 
 * Berikut ini rules untuk memperbaiki array.
 * - Jika elemen merupakan angka, maka biarkan saja di dalam array
 * - Jika elemen merupakan huruf kecil / lowercase, biarkan saja di dalam array
 * - Jika elemen merupakan huruf besar, maka hilangkan dari array
 * 
 * Input tidak akan berisi karakter selain huruf dan angka!
 * 
 * RULES
 *  Tuliskan Pseudocode!!!
 *  Built-in function yang diperbolehkan hanya .toLowerCase(), .toUpperCase() dan .push()
 *  
 */

/**
 * Tuliskan Pseudocode disini!
 * SET alfabet to string that contain all uppercase alphabet
 * INIT newArray
 * FOR each element of input array
 *  FOR each alfabet character
 *    IF input element equal to character THEN
 *      BREAK
 *    ELSE IF input element not equal to all character in alfabet
 *      SET newArray[newArray length] equal to input element
 *    END IF
 *  END FOR
 * END FOR
 * RETURN newArray
 */

function fixArray(array) {
  let alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let newArray = [];
  for (let i of array) {
    for (let j = 0; j < alfabet.length; j++) {
      if (i == alfabet[j]) {
        break;
      } else if (i != alfabet[j] && j == alfabet.length - 1) {
        newArray.push(i);
      }
    }
  }
  return newArray;
}

console.log(fixArray([1, 2, 3, 'a', 'b', 'B', 'C', 30, 70])) // [ 1, 2,  3,  'a', 'b', 30, 70 ]

console.log(fixArray([1, 'b', 3, 'a', 'b', 'C', 100000])) // [ 1, 'b', 3, 'a', 'b', 100000 ]