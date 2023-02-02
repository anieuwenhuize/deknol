import { squares, captures, pieces, getPiece, setPiece, setPieces, getSquare } from './navigationboard.js'

const getPossibleMoves = (san) => {
    let piece = getPiece(san)
    switch(piece) {
        case pieces.white.pawn: default: {
            let cn = san;
            return [getSquare(cn, 0, 1), getSquare(cn, 0, 2)]
        }
    }
} 

export { squares, captures, pieces, getPiece, setPiece, setPieces, getPossibleMoves }