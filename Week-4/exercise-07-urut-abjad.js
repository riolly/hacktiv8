/**
 * This function rearrange all character in string in ascending order.
 * 
 * @param {string} str input string
 * 
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function urutkanAbjad(str) {
    let array = [];
    for (var g = 0; g < str.length; g++) {              // Make array from the string
        array[g] = str[g];
    }

    for (var h = 0; h < array.length -1; h++) {         // Do sorting 
        for (var i = 0; i < array.length -h -1; i++) {      // Permutation (not check the sorted element for next iteration)
            if (array[i] > array[i+1]) {                        // if larger than next element, switch (ascending)
                let buffer = array[i];
                array[i] = array[i+1];
                array[i+1] = buffer;
            } 
        }
    }

    for (var j = 1; j < array.length; j++) {            // Join it all in one element
        array[0] += array[j];
    }
    while (array.length > 1) {
        array.pop();
    }
    return array[0];

}
  
// TEST CASES
console.log(urutkanAbjad('hello'));     // 'ehllo'
console.log(urutkanAbjad('truncate'));  // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software'));  // 'aeforstw'
console.log(urutkanAbjad('aegis'));     // 'aegis'

console.log("\nIf there is a way to improve this code, please tell me :)");