import { squares, captures, pieces, getPiece, setPiece, setPieces, getSquare, getCN, isPawnMove } from './navigationboard.js'

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