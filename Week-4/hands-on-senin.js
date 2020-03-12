var myBiodata = {
    name: "",
    age: 24,
    batch: 42
}

myBiodata.name = "Alberto";
// console.log(myBiodata.name);
for (let i in myBiodata) {
    if (i == "name") {
        // console.log(i);
    }
}

myBiodata.gender = 'Laki-laki';
// console.log(myBiodata);
myBiodata2 = {};
for (let j in myBiodata) {
    myBiodata2[j] = myBiodata[j];
}
delete myBiodata.age;
myBiodata2.name = "Riolly";
myBiodata2.hobi = 'Coding';

myBiodata2.score = [[70, 80, 90], [50, 90, 70], [100, 45, 35]];
let rerataTotal = 0;

let rerata = [];
for (let m in myBiodata2.score) {
    let totalPerBaris = 0;
    for (let n of myBiodata2.score[m]) {
        totalPerBaris += n;
    }
    rerata.push(totalPerBaris / myBiodata2.score[m].length);
}
myBiodata2.rerata = rerata;

let jumlahAngka = 0;
for (let k in myBiodata2.score) {
    for (let l of myBiodata2.score[k]) {
        rerataTotal += l;
        jumlahAngka++;
    }
}
myBiodata2.rerataTotal = (rerataTotal / jumlahAngka);

console.log(myBiodata2);