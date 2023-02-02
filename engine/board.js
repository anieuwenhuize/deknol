const squares = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 8th rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 7th rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 6th rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 5th rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 4th rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 3rd rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 2nd rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']  // 1st rank
];

const pieces = {
    white: {
        king: 'K', queen: 'Q', rook: 'R', bishop: 'B', knight: 'N', pawn: 'P'
    },
    black: {
        king: 'k', queen: 'q', rook: 'R', bishop: 'b', knight: 'n', pawn: 'p'
    }
}

const w_captures = [], 
      b_captures = [];

// Example: e5 -> { rank: 3, file: 4 }
const getCoordsFromAlgabraic = (loc) => {
    let coord = [...loc];
    let f = "abcdefgh".indexOf(coord[0]);
    let r = 8 - parseInt(coord[1]);
    console.log(r)
    return { rank: r, file: f }
}

const setPiece = (piece, loc) => {
    let techLoc = getCoordsFromAlgabraic(loc);
    squares[techLoc.rank][techLoc.file] = piece;
}

const startingPosition = () => {

    // white force
    setPiece(pieces.white.king, "e1");
    setPiece(pieces.white.queen, "d1");
    setPiece(pieces.white.bishop, "c1");
    setPiece(pieces.white.bishop, "f1");


    // // black force
    setPiece(pieces.black.king, "e8");
    setPiece(pieces.black.queen, "d8");
    setPiece(pieces.black.bishop, "c8");
    setPiece(pieces.black.bishop, "f8");
}

const newGame = () => {

    startingPosition();
};


export { squares, newGame };