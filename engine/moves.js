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
     /^K[a-h][1-8]$/.test(san);         // e.g. 'Ke2'


const isKingsideCastling = (san) =>     // i.e. '0-0'
    /^0\-0$/.test(san);

const isQueensideCastling = (san) =>    // i.e. '0-0-0'
    /^0\-0\-0$/.test(san);

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