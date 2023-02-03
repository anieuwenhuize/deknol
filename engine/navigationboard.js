import { squares, captures } from './board.js'

// coordinate notation (CN) e.g. 'a1', 'h8'
// short algebraic notation (SAN) e.g. 'e4', 'Nf6'

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

const clearSquare = (cn) => {
    let coord = getCoordsFromAlgabraic(cn);
    squares[coord.rank][coord.file] = ' ';
}

const getPiece = (cn) => {
    let coord = getCoordsFromAlgabraic(cn)
    return squares[coord.rank][coord.file];
}

const setPieces = (piece, locs) => 
    locs.forEach(loc => setPiece(piece, loc))

const navigation_move = (cn_from, cn_dest) => {
    let piece = getPiece(cn_from);
    setPiece(piece, cn_dest)
    clearSquare(cn_from)
}

export { squares, captures, getPiece, setPiece, setPieces, getSquare, getCN, navigation_move }