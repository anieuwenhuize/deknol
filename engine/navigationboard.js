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

const isPawnMove = (san) => {
    const is_pawn_move = /^[a-h][1-8]$/ // e.g. e4, h6
    return is_pawn_move.test(san);
}
    
const getSquare = (cn, delta_file, delta_rank) => {
    let coord = getCoordsFromAlgabraic(cn)
    let coord2 = { 
        file: coord.file + delta_file, 
        rank: (8 - coord.rank) + delta_rank }

    return getAlgabraicFromCoords(coord2);
}

const getCN = (piece, cns) => {
    let cn = undefined;
    cns.forEach(_cn => {
        let cand = getPiece(_cn);
        if (cand === piece) cn = _cn;
    })
    return cn;
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

export { squares, captures, pieces, getPiece, setPiece, setPieces, getSquare, getCN, isPawnMove }