/*
Ninja Hatori adalah pendaki gunung yang rajin. Dia mencatat naik turun gunungnya dengan cermat, memperhatikan detail kecil seperti topografi. 
Untuk setiap langkah yang dia ambil, dia mencatat apakah itu langkah menanjak atau menurun. Langkah Ninja Hatori selalu dimulai dan berakhir di permukaan laut.
Berikut ini beberapa istilah yang dipakai:
    Gunung adalah urutan langkah-langkah berurutan di atas permukaan laut, dimulai dengan langkah naik dari permukaan laut dan berakhir dengan langkah turun ke permukaan laut.
    Lembah adalah urutan langkah-langkah berurutan di bawah permukaan laut, dimulai dengan langkah turun dari permukaan laut dan berakhir dengan langkah naik ke permukaan laut.
N = naik
T = turun
​
Hitung berapa jumlah lembah yang dilaluinya.

BEGIN jumlahLembah(terrain)
    SET groundLevel to 0
    SET valley to 0
    SET hill to 0
    FOR each element on terrain
        IF terrain move down THEN
            DECREMENT groundLevel
            IF groundLevel equal to 0 THEN
                INCREMENT hill
            END IF
        ELSE terrain move up
            INCREMENT groundLevel
            IF groundLevel equal to 0 THEN
                INCREMENT valley
            END IF
        END IF
    END FOR 
    RETURN valley;
END
*/

function jumlahLembah(terrain){
    let groundLevel = 0; // 0 mean at sea level
    let valley = 0;
    let hill = 0;
    for (let i = 0; i < terrain.length; i++) { // See all terrain
        if (terrain[i] == 'T') { // If it's move down and
            groundLevel--;
            if (groundLevel == 0) { // reach back to sea level, it's mean hill
                hill++;
            }
        } else if (terrain[i] == 'N') { // If it's move up and 
            groundLevel++;
            if (groundLevel == 0) { // reach back to sea level, it's mean valley
                valley++;
            }
        }
    }
    return valley;
}

console.log(jumlahLembah(['N','T','T','T','N','T','N','N'])); // 1
console.log(jumlahLembah(['T','T','N','N','T','T','N','T','N','N','N','T'])); // 2