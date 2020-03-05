/**
 * This function create new 2D array of personal data into an object and print it.
 * @param {Array} arr input array of mutiple person data;
 */
function changeMe(arr) {
    nowYear = 2020;
    for (var i = 0; i < arr.length; i++) {
        var orang = new Person(arr[i]);
        console.log(`${i+1}. ${orang.firstName} ${orang.lastName}:`)
        console.log(orang);
    }
}
/**
 * This function create new person object from the input array.
 * @param {Array} arr input array
 */
function Person(arr){
    this.firstName = arr[0];
    this.lastName = arr[1];
    this.gender = arr[2];
    if (arr[3] == undefined || arr[3] > nowYear) {
        this.age = 'Invalid';
    } else {
        this.age = nowYear - arr[3];
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