var backdrop = document.querySelector("body");
var squares = document.querySelectorAll(".square");
var heading = document.getElementById("header");
var resetButton = document.getElementById("reset");

var pickedColor = init(9);

resetButton.addEventListener('click', function () {
    pickedColor = init(9);
});

for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
        var clickedColor = this.style.backgroundColor;
        if (pickedColor == clickedColor) {
            document.getElementById("colorRGB").innerHTML = 'Tepat sekali!';
            document.getElementById("colorRGB").style.color = pickedColor;
            for (i = 0; i <= squares.length; i++) {
                squares[i].style.backgroundColor = pickedColor;

            }
        } else {
            this.style.backgroundColor = backdrop.style.backgroundColor;
            window.alert("Coba lagi!");
        }
    });
}

function init(numSquare) {
    var colors = randomColor(numSquare);
    var pickedColor = pickColor(colors, numSquare);
    document.getElementById("colorRGB").innerHTML = pickedColor;

    heading.style.backgroundColor = randomRGBA();
    heading.style.color = randomRGBA();
    backdrop.style.backgroundColor = randomRGBA();

    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    return pickedColor;
}

function randomColor(num = 0) {
    colorArr = [];
    for (i = 0; i < num; i++) {
        let colorCode = 'rgb(';
        colorCode += Math.round(Math.random() * 255);
        colorCode += ', ';
        colorCode += Math.round(Math.random() * 255);
        colorCode += ', ';
        colorCode += Math.round(Math.random() * 255);
        colorCode += ')';
        colorArr.push(colorCode);
    }
    return colorArr;
}

function pickColor(colorArr, num) {
    return colorArr[Math.floor(Math.random() * num)];
}

function randomRGBA() {
    let colorCode = 'rgba(';
    colorCode += Math.round(Math.random() * 255);
    colorCode += ', ';
    colorCode += Math.round(Math.random() * 255);
    colorCode += ', ';
    colorCode += Math.round(Math.random() * 255);
    colorCode += ', 1)';
    return colorCode;
}