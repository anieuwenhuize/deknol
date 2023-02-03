import { squares, captures, getPiece, setPiece, setPieces, getSquare, getCN, navigation_move } from './navigationboard.js'
import * as _ from './symbols.js'
import { files, ranks, diagonals } from './directions.js'
import { test_move } from './moves.js'

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

const chessmove = (san) => {
    let res = test_move(san);

    if(res.isPawnMove) {
        let cn_dest = san;
        let letter = cn_dest[0];
        let cn_from = findInFile(_.P, letter);
        navigation_move(cn_from, cn_dest)
    }
}

export { squares, captures, getPiece, setPiece, setPieces, chessmove }