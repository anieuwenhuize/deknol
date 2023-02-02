import { squares, captures, pieces, getPiece, setPiece, setPieces } from './navigationboard.js'

const getPossibleMoves = (san) => {
    let piece = getType(san)

    switch(piece) {
        case pieces.white.pawn: {
            
        }
    }
} 

export { squares, captures, pieces, getPiece, setPiece, setPieces, getPossibleMoves }