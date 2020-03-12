var pets = [{
        name: "Pompom",
        age: 4,
        type: "Dog"
    },
    {
        name: "Subo",
        age: 2,
        type: "Cat"
    },
    {
        name: "Dancy",
        age: 1,
        type: "Cat"
    },
    {
        name: "Akamaru",
        age: 3,
        type: "Dog"
    },
    {
        name: "Giri",
        age: 4.4,
        type: "Panda"
    }
]
// Sort by type
// Sort by age ()
// Average age
// Most frequent animal
var hewan = {}
for (var i = 0; i < pets.length; i++) {
    if (hewan[pets[i].type] == undefined) {
        hewan[pets[i].type] = [pets[i].name];
    } else {
        hewan[pets[i].type].push(pets[i].name);
    }
}
console.log(hewan);

