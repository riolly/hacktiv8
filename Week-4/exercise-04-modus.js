/**
 * This function used to find the most frequent number of an array.
 * @param {number[]} arr input array of number
 * 
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function cariModus(arr) {
    let number = [arr[0]];                      // Array to store the number 
    let count = [1];                            // Array to store the frequency
                                                // (number-frequency pairing with the same index)
    for (var i = 1; i < arr.length; i++){       // Count frequency of each number
        let j = 0;
        while (true){
            if (arr[i] == number[j]) {              // If the number already counted
                count[j] = count[j]+1;                  // Count 
                break;
            } else {                                // If not
                if (j < count.length-1) {               // Check with the next already counted number
                    j++;
                } else {                                // If is not there, add to the array & count
                    number[j+1] = arr[i];
                    count[j+1] = 1;
                    break;
                }
            }
        }
    }
    // Find the most frequent number from count array
    if (count.length == 1) {                    // If all the number is the same, return -1
        return -1;
    } else {
        let terbanyak = count[0];             
        let angkaTerbanyak = number[0];         
        let change = false;                         
        for (var i = 1; i < count.length; i++){ 
            if (count[i] != terbanyak) {            // If the value is different
                if (count[i] > terbanyak) {             // And more than the first one
                    terbanyak = count[i];                   // Assign the new value
                    angkaTerbanyak = number[i];
                }
                change = true;                          // (Just to make sure that all the frequency not the same)
            }
        }
        if (change == false) {                  // If all the number has the same frequency, return -1
            return -1;                
        } else {                                // If not, return the most frequent number
            return angkaTerbanyak;
        }
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4]));   // 4
console.log(cariModus([5, 10, 10, 6, 5]));  // 5
console.log(cariModus([10, 3, 1, 2, 5]));   // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7]));    // -1

console.log("\nIf there is a way to improve this code, please tell me :)");