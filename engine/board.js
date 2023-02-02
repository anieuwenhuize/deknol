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
        king: 'k', queen: 'q', rook: 'r', bishop: 'b', knight: 'n', pawn: 'p'
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

const setPieces = (piece, locs) => 
    locs.forEach(loc => setPiece(piece, loc))

const startingPosition = () => {

    // white force
    setPiece(pieces.white.king, "e1");
    setPiece(pieces.white.queen, "d1");
    setPieces(pieces.white.bishop, ["c1","f1"]);
    setPieces(pieces.white.knight, ["b1","g1"]);
    setPieces(pieces.white.rook, ["a1","h1"]);
    setPieces(pieces.white.pawn, ["e2","d2","c2","f2","b2","g2","a2","h2"]);

    // // black force
    setPiece(pieces.black.king, "e8");
    setPiece(pieces.black.queen, "d8");
    setPieces(pieces.black.bishop, ["c8","f8"]);
    setPieces(pieces.black.knight, ["b8","g8"]);
    setPieces(pieces.black.rook, ["a8","h8"]);
    setPieces(pieces.black.pawn, ["e7","d7","c7","f7","b7","g7","a7","h7"]);
}

const newGame = () => {

    startingPosition();
};


export { squares, newGame };