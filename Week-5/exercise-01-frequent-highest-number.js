function sorting(numberArr) {
    for (let i = 0; i < numberArr.length; i++) {
        for (let j = 0; j < numberArr.length - i - 1; j++) {
            if (numberArr[j + 1] > numberArr[j]) {
                let buffer = numberArr[j];
                numberArr[j] = numberArr[j + 1];
                numberArr[j + 1] = buffer;
            }
        }
    }
    return numberArr;
}

function getTotal(arrNumber) {
    if (arrNumber.length > 0) {
        let count = 0;
        while (arrNumber[count] == arrNumber[count + 1]) {
            count++;
        }
        return count += 1;
    } else {
        return '';
    }

}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''