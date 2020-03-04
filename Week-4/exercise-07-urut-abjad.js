function urutkanAbjad(str) {
    let array = [];
    for (var g = 0; g < str.length; g++) {
        array[g] = str[g];
    }
    // console.log(string);

    for (var h = 0; h < array.length -1; h++) {
        // console.log('\nIterasi ke '+h);
        for (var i = 0; i < array.length -h -1; i++) {
            // console.log(i);
            if (array[i] > array[i+1]) {
                // console.log(`${string[i]} > ${string[i+1]}`);
                let buffer = array[i];
                array[i] = array[i+1];
                array[i+1] = buffer;
                // console.log(string);
            } else {
                // console.log(`${string[i]} <= ${string[i+1]}`);
            }
        }
    }

    let backString = '';
    for (var j = 0; j < array.length; j++) {
        backString += array[j];
    }
    return backString;

}
  
// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'