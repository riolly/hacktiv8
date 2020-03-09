var pasien = [[1, 'Joker', 25], [2, "Batman", 42], [3, "Robin", 32]];
var data = ['ID', 'Nama', 'Usia'];

var pasienArr = [];
for (let j in pasien){
    var pasienObj = {};
    for (let i in data) {
        pasienObj[data[i]] = pasien[j][i];
    }
    pasienArr.push(pasienObj);
}

console.log(pasienArr);