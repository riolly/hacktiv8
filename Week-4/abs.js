// function diagonalDifference(arr) {
//     let firstDiagonal = 0;
//     let secondDiagonal = 0;
//     for (let i = 0; i < arr.length; i++) {
//         console.log(`i ${i}`);
//         for (let j = 0; j < arr.length; j++) {
//             console.log(`j ${j}`);
//             if (arr[i][j] != arr[i][arr.length - j -1]) {
//                 if (i == j) {
//                     console.log("First");
//                 } else if (i == arr.length - j - 1) {
//                     console.log("Second");
//                 }
//             } 
//         }
//     }
//     return arr;
// }

// console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));

// function miniMaxSum(arr) {
//     let min = Infinity;
//     let max = -Infinity;
//     for (let i in arr) {
//         let sum = 0;
//         for (let j in arr) {
//             if (i != j) {
//                 sum += arr[j];
//             }
//         }
//         if (sum < min) {
//             min = sum;
//         }
//         if (sum > max) {
//             max = sum;
//         }
//     }
//     console.log(`${min} ${max}`);
// }

// miniMaxSum([1,2,3,4,5]);

// function timeConversion(s) {
//     let string24 = '';
//     let hour = s.slice(0,2);
//     if (s[8] === 'P') {
//         if (hour == '12') {
//             string24 += hour;
//         } else {
//             if (Number(hour) < 10) {
//                 string24 += '0'
//             }
//             string24 += (Number(hour) + 12);
//         }
//     } else if (s[8] == 'A'){
//         if (hour == '12') {
//             string24 += '00';
//         } else {
//             string24 += hour;
//         }
//     }
//     string24 += s.slice(2,8);
//     return string24;
// }
// console.log(timeConversion("07:05:45PM"));

function gradingStudents(grades) {
    for (let i of grades) {
        let nextGrade = i; 
        while (nextGrade % 5 != 0) {
            nextGrade++;
        }
        if (nextGrade - i < 3 && nextGrade >=40) {
            console.log(nextGrade);
        } else {
            console.log(i);
        }
    }
}
gradingStudents([73,67,38,33]);