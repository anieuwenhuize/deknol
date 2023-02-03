import { squares, captures, getPiece, setPiece, setPieces, chessmove } from './chessboundboard.js'
import * as _ from './symbols.js'

const startingPosition = () => {

    // white force
    setPiece(_.K, _.e1);
    setPiece(_.Q, _.d1);
    setPieces(_.B, [_.c1,_.f1]);
    setPieces(_.N, [_.b1,_.g1]);
    setPieces(_.R, [_.a1,_.h1]);
    setPieces(_.P, [_.e2,_.d2,_.c2,_.f2,_.b2,_.g2,_.a2,_.h2]);

    // // black force
    setPiece(_.k, _.e8);
    setPiece(_.q, _.d8);
    setPieces(_.b, [_.c8,_.f8]);
    setPieces(_.n, [_.b8,_.g8]);
    setPieces(_.r, [_.a8,_.h8]);
    setPieces(_.p, [_.e7,_.d7,_.c7,_.f7,_.b7,_.g7,_.a7,_.h7]);
}

const newGame = () => {

    startingPosition();
};

const move = (san) => {
    chessmove(san)
}

export { squares, captures, newGame, move }