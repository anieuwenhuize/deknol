import { squares, captures, pieces } from './board.js'

// coordinate notation (CN) e.g. a1 - h8
// short algebraic notation (SAN) e.g. e4, Nf6

const getCoordsFromAlgabraic = (cn) => {
    let coord = [...cn];
    let f = "abcdefgh".indexOf(coord[0]);
    let r = 8 - parseInt(coord[1]);

    return { rank: r, file: f }
}

const getAlgabraicFromCoords = (coord) => {
    let file = [..."abcdefgh"][coord.file];
    return file + coord.rank;
}



// const getCurrentLoc = (san) => {
//     const is_pawn_move = /^[a-h][1-8]$/ // e.g. e4, h6
//     if (is_pawn_move.test(san)) {
//         let coords = getCoordsFromAlgabraic(san)

//     }
// } 

// short algebraic notation (SAN)
// const movePiece = (color, san) => {
    
// }



// const getType = (san) => {
//     let coord = getCoordsFromAlgabraic(san)
//     return getSymbolFromSquares(coord)
// }

const getSquare = (cn, delta_file, delta_rank) => {
    let coord = getCoordsFromAlgabraic(cn)
    console.log(coord)
    let coord2 = { 
        file: coord.file + delta_file, 
        rank: coord.rank + delta_rank }

    return getAlgabraicFromCoords(coord2);
}


const setPiece = (piece, loc) => {
    let coord = getCoordsFromAlgabraic(loc);
    squares[coord.rank][coord.file] = piece;
}

const getPiece = (cn) => {
    let coord = getCoordsFromAlgabraic(cn)
    return squares[coord.rank][coord.file];
}

const setPieces = (piece, locs) => 
    locs.forEach(loc => setPiece(piece, loc))

export { squares, captures, pieces, getPiece, setPiece, setPieces, getSquare }