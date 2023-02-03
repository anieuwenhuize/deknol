const isPawnMove = (san) => 
    /^[a-h][1-8]$/.test(san);           // e.g. 'e4', 'h6'

const isRookMove = (san) =>
     /^R[a-h]?[a-h][1-8]$/.test(san);   // e.g. 'Rg1', 'Raf8'

const isBisshopMove = (san) =>
     /^B[a-h][1-8]$/.test(san);         // e.g. 'Bf3', 'Be3' 

const isKnightMove = (san) =>
     /^N[a-h][1-8]$/.test(san);         // e.g. 'Nf3', 'Nbd2', 'N3d2'

const isQueenMove = (san) =>
     /^Q[a-h][1-8]$/.test(san);         // e.g. 'Qe6'

const isKingMove = (san) =>
     /^K[a-h][1-8]$/.test(san);         // e.g. 'ke2'


const isKingsideCastling = (san) => {
    const is_pawn_move = /^0\-0$/ // e.g. e4, h6
    return is_pawn_move.test(san);
}

const isQueensideCastling = (san) => {
    const is_pawn_move = /^0\-0\-0$/ // e.g. e4, h6
    return is_pawn_move.test(san);
}

const test_move = (san) => {

    return {
        isPawnMove: isPawnMove(san),
        isRookMove: isRookMove(san),
        isBisshopMove: isBisshopMove(san),
        isKnightMove: isKnightMove(san),
        isQueenMove: isQueenMove(san),
        isKingMove: isKingMove(san),
        isKingsideCastling: isKingsideCastling(san),
        isQueensideCastling: isQueensideCastling(san)
    }    
}

export { test_move }