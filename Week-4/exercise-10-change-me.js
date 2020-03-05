/**
 * This function create new of personal data object from 2D array and print it.
 * @example
 * var input = [['firstName1', 'lastname1', 'gender1', 'bornYear1'], ['firstName1', 'lastname1', 'gender1',], ...]
 * changeMe(input);
 * @param {Array} arr input array
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */
function changeMe(arr) {
    for (var i = 0; i < arr.length; i++){
        const nowYear = 2020;
        var person = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: (arr[i][3] == undefined || arr[i][3] > nowYear) ? 'Invalid' : nowYear - arr[i][3]  // Calculate the age
        }
        console.log(`${i+1}. ${person.firstName} ${person.lastName}`);
        console.log(person);
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]);
// ""

console.log("\nIf there is a way to improve this code, please tell me :)");