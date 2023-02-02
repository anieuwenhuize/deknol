import { squares, captures, pieces, getPiece, setPiece, setPieces, getPossibleMoves } from './chessboundboard.js'

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

export { squares, captures, newGame }