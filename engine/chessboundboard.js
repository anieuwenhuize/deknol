import { squares, captures, pieces, getPiece, setPiece, setPieces, getSquare, getCN, isPawnMove } from './navigationboard.js'

const ranks = [
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'], 
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'], 
    ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'], 
    ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'], 
    ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'], 
    ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'], 
    ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']  
];

const files = [
    ranks.map(rank => rank[0]), // a
    ranks.map(rank => rank[1]), // b
    ranks.map(rank => rank[2]), // c
    ranks.map(rank => rank[3]), // d
    ranks.map(rank => rank[4]), // e
    ranks.map(rank => rank[5]), // f
    ranks.map(rank => rank[6]), // g
    ranks.map(rank => rank[7])  // h
];

const getRank = (number) => {
    return ranks[number -1];
}

const getFile = (letter) => {
    let i = "abcdefgh".indexOf(letter);
    return files[i];
}

const findInFile = (piece, letter) => {
    let file = getFile(letter);
    return getCN(piece, file);
}

const getMovesPawn = (cn) => {
    let letter = cn[0];
    let piece_to_move = findInFile(pieces.white.pawn, letter);
    
    return [getSquare(piece_to_move, 0, 1), getSquare(piece_to_move, 0, 2)]
}

const getPossibleMoves = (san) => {
    
    if (isPawnMove(san)) {
        let cn = san;
        return getMovesPawn(cn);
    }
} 

export { squares, captures, pieces, getPiece, setPiece, setPieces, getPossibleMoves }