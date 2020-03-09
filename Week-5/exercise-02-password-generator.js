function changeVocals(str) {
    const alfabet = ["aiueoAIUEO", "bjvfpBJVFP"];
    let strNew = '';
    for (let i in str) {
        for (let j in alfabet[0]) {
            if (str[i] == alfabet[0][j]) {
                // console.log(j)
                strNew += alfabet[1][j];
                break;
            }
            if (j == alfabet[0].length - 1) {
                strNew += str[i];
            }
        }
    }
    return strNew;
}

function reverseWord(str) {
    let strNew = '';
    for (let i in str) {
        strNew += str[str.length - i - 1];
    }
    return strNew;
}

function setLowerUpperCase(str) {
    const alfabet = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    let strNew = '';
    for (let i in str) {
        for (let j in alfabet[0]) {
            if (str[i] == alfabet[0][j]) {
                strNew += alfabet[1][j];
                break;
            } else if (str[i] == alfabet[1][j]) {
                strNew += alfabet[0][j];
                break;
            }
            if (j == alfabet[0].length - 1) {
                strNew += str[i];
            }
        }
    }
    return strNew;
}

function removeSpaces(str) {
    let strNew = '';
    for (let i of str) {
        if (i != ' ') {
            strNew += i;
        }
    }
    return strNew;
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'