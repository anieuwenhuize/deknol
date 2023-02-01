const squares = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 1st rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 2nd rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 3rd rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 4th rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 5th rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 6th rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 7th rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '] // 8th rank
];

const pieces = {
    whiteKing: 'K', whiteQueen: 'Q', whiteBishop: 'B', whiteKnight: 'N', whitePawn: 'P',
    blackKing: 'k', blackQueen: 'q', blackbishop: 'b', blackKnight: 'n', pawn: 'p'
}

const w_captures = [], 
      b_captures = [];

// Example: e4 -> { rank: 3, file: 4 }
const getCoordsFromAlgabraic = (loc) => {
    let coord = [...loc];
    let f = "abcdefgh".indexOf(coord[0]);
    let r = parseInt(coord[1]) -1;

    return { rank: r, file: f }
}

const setPiece = (piece, loc) => {
    let techLoc = getCoordsFromAlgabraic(loc);
    squares[techLoc.rank][techLoc.file] = piece;
}

const newGame = () => {

    // set King
    setPiece(pieces.whiteKing, "e1");
    setPiece(pieces.blackKing, "e8");

    setPiece(pieces.whiteQueen, "d1");
    setPiece(pieces.blackQueen, "d8");
};


export { squares, getCoordsFromAlgabraic, newGame };