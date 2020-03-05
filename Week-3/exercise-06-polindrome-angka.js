function angkaPalindrome(number) {
    var digit = String(number).length;
    if (digit > 1 || number == 9) { // If digit more than 2
        var palindrome = false;
        var numberStr = String(number);
        while (!palindrome) { // Until find the closes palindrome number
            for (var i = 0; i < Math.floor(digit / 2); i++) { // Check the new number
                if (numberStr[i] != numberStr[digit - 1 - i]) {
                    palindrome = false;
                    break;
                } else if (i == Math.floor(digit / 2) - 1) {
                    palindrome = true;
                }
            }
            number++;
            numberStr = String(number);
        }
        return number-1;
    } else { // If one digit number except 9
        return number+1; // Return next number
    }
}

// TEST CASE
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001