/* 
Seekor kancil ingin menyeberang sungai yang terdapat banyak buaya. Agar tidak dimakan buaya, kancil harus lompat ke batu batu yg ada di sungai.
Kancil hanya bisa lompat batu dengan selisih 1 atau 2.
Kancil harus se efisien mungkin melompati sungai, sehingga kancil akan memilih batu dengan jumlah lompatan terkecil.
    0 menunjukkan batu untuk lompat
    1 menunjukan buaya yang wajib dilewati
Carilah jumlah lompatan terkecil kancil.

CONSTRAIN
  index terkahir selalu 0, sehingga kancil pasti bisa melewati sungai tanpa dimakan buaya.

BEGIN lompatanTerpendek(sungai)
    SET stonePosition to 0
    SET step to 0
    WHILE steppingStone < sungai length -1
        IF sungai[steppingStone + 2] equal to 0 THEN
            INCREMENT stonePosition by 2
        ELSE 
            INCREMENT stonePosition
        END IF
        INCREMENT step
    END WHILE
    RETURN step
END
 */

function lompatanTerpendek(sungai) {
    let stonePosition = 0;
    let step = 0;
    while (stonePosition < sungai.length-1) {
        if (sungai[stonePosition+2] == 0) {
            stonePosition += 2;
        } else {
            stonePosition++;
        }
        step++;
    }
    return step;
}

console.log(lompatanTerpendek([0, 0, 0, 0, 1, 0])); // 3
console.log(lompatanTerpendek([0, 0, 1, 0, 0, 1, 0])); // 4
console.log(lompatanTerpendek([0, 0, 0, 1, 0, 0])); // 3