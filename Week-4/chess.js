function kingIsInCheck(chessboard) {
    for (let row in chessboard) {
        for (let column in chessboard) {
            
        }
    }
    

    // let king = [];
    // let king = [];
    // let fortress = [];
    // let kingFind = false;
    // let fortressFind = false;
    // let i = 0;
    // while (!kingFind || !fortressFind) {
    //     let j = 0;
    //     while (j < chessboard[i].length) {
    //         if (chessboard[i][j] == '♜') {
    //             fortress.push(i);
    //             fortress.push(j);
    //             fortressFind = true;
    //         } else if (chessboard[i][j] == '♔') {
    //             king.push(i);
    //             king.push(j);
    //             kingFind = true;
    //         }
    //         j++;
    //     }
    //     i++;
    // }
    // let k = 0;
    // while (fortress[k] != undefined) {
    //     if (king[0] == fortress[k] || king[1] == fortress[k+1]) {
    //         return true;
    //     }
    //     k+=2;
    // }
    // return false;
}

let chessboard = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
];

let chessboard = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '♜', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '♔', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
console.log(kingIsInCheck(chessboard)) //True
chessboard = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '♜', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '♔', ' ', ' ', '♜', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
console.log(kingIsInCheck(chessboard)) //False
chessboard = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'q', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '♔', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
console.log(kingIsInCheck(chessboard)) //True 