import { squares, captures, pieces } from './board.js'


// Example: e5 -> { rank: 3, file: 4 }
const getCoordsFromAlgabraic = (san) => {
    let coord = [...san];
    let f = "abcdefgh".indexOf(coord[0]);
    let r = 8 - parseInt(coord[1]);

    return { rank: r, file: f }
}

const getAlgabraicFromCoords = (coords) => {
    let coord = [...san];
    let f = "abcdefgh".indexOf(coord[0]);
    let r = 8 - parseInt(coord[1]);

    return "e4";
}



const getCurrentLoc = (san) => {
    const is_pawn_move = /^[a-h][1-8]$/ // e.g. e4, h6
    if (is_pawn_move.test(san)) {
        let coords = getCoordsFromAlgabraic(san)

    }
} 

// short algebraic notation (SAN)
const movePiece = (color, san) => {
    
}



const getType = (san) => {
    let coord = getCoordsFromAlgabraic(san)
    return getSymbolFromSquares(coord)
}

const getNextRank = (san) => {
    let coord = getCoordsFromAlgabraic(san)
    let coord2 = { file: coord.file, rank: coord.rank +1 }
}

const getPossibleMoves = (san) => {
    let piece = getType(san)

    switch(piece) {
        case pieces.white.pawn: {
            
        }
    }
} 

const setPiece = (piece, loc) => {
    let techLoc = getCoordsFromAlgabraic(loc);
    squares[techLoc.rank][techLoc.file] = piece;
}

const getPiece = (coord) => {
    return squares[techLoc.rank][techLoc.file];
}

const setPieces = (piece, locs) => 
    locs.forEach(loc => setPiece(piece, loc))

export { squares, captures, pieces, getPiece, setPiece, setPieces }