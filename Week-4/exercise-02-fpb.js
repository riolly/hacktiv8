/**
 * This function find the biggest factor from two numbers.
 * @param {number} number1 first number
 * @param {number} number2 second number
 * @link https://github.com/riolly
 * @author Alberto Riolly <alberto.cahyantara@gmail.com>
 */

function fpb(number1, number2) {
    // Biggest factor from two number always less or equal then the number small number
    let smaller = number1;
    if (number1 > number2) {
        smaller = number2;
    }
    let biggestFactor;
    for (let i = 1; i <= smaller; i++) {
        if (number1 % i == 0 && number2 % i == 0) { // If both of number can be devide by that number, 
            biggestFactor = i;
        }
    }
    return biggestFactor;
}
// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

console.log("\nIf there is a way to improve this code, please tell me :)");