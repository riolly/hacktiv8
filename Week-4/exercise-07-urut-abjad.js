/**
 * This function rearrange all character in string in ascending order.
 * @param {string} str input string
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function urutkanAbjad(str) {
    // Make array from the string
    const array = [];
    for (let g = 0; g < str.length; g++) {
        array[g] = str[g];
    }
    // Do sorting by compare to the next character
    for (let h = 0; h < array.length - 1; h++) {
        for (let i = 0; i < array.length - h - 1; i++) { // No need to check the sorted element from last iteration
            if (array[i] > array[i + 1]) { // if larger than next element, switch (ascending)
                const buffer = array[i];
                array[i] = array[i + 1];
                array[i + 1] = buffer;
            }
        }
    }
    // Join it all in one element
    for (let j = 1; j < array.length; j++) {
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