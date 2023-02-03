import * as _ from './symbols.js'

const ranks = [
    [_.a1,_.b1,_.c1,_.d1,_.e1,_.f1,_.g1,_.h1],
    [_.a2,_.b2,_.c2,_.d2,_.e2,_.f2,_.g2,_.h2], 
    [_.a3,_.b3,_.c3,_.d3,_.e3,_.f3,_.g3,_.h3], 
    [_.a4,_.b4,_.c4,_.d4,_.e4,_.f4,_.g4,_.h4], 
    [_.a5,_.b5,_.c5,_.d5,_.e5,_.f5,_.g5,_.h5], 
    [_.a6,_.b6,_.c6,_.d6,_.e6,_.f6,_.g6,_.h6], 
    [_.a7,_.b7,_.c7,_.d7,_.e7,_.f7,_.g7,_.h7], 
    [_.a8,_.b8,_.c8,_.d8,_.e8,_.f8,_.g8,_.h8]  
];

const files = [
    ranks.map(rank => rank[0]), // a
    ranks.map(rank => rank[1]), // b
    ranks.map(rank => rank[2]), // c
    ranks.map(rank => rank[3]), // d
    ranks.map(rank => rank[4]), // e
    ranks.map(rank => rank[5]), // f
    ranks.map(rank => rank[6]), // g
    ranks.map(rank => rank[7])  // h
];

// Tnks Sqod on https://www.chess.com/forum/view/general/which-diagonals-have-names
const diagonals = [
    [_.a8],                    // a8-a8    1   (a single square)
    [_.a6,_.b7,_.c8],          //a6-c8     3
    [_.a4,_.b5,_.c6,_.d7,_.e8],    //         a4-e8        5                     "Spanish Diagonal"
    [_.a2,_.b3,_.c4,_.d5,_.e6,_.f7,_.g8],   //         a2-g8   7                     Italian Diagonal
    [_.b1,_.c2,_.d3,_.e4,_.f5,_.g6,_.h7],   //         b1-h7   7
    [_.d1,_.e2,_.f3,_.g4,_.h5],      //         d1-h5      5
    [_.f1,_.g2,_.h3],     //         f1-h3             3
    [_.h1],     //         h1-h1                   1 (a single square)
        
    [_.a7,_.b8],     //         a7-b8                2
    [_.a5,_.b6,_.c7,_.d8],   //         a5-d8            4                     "Caro-Kann Diagonal"
    [_.a3,_.b4,_.c5,_.d6,_.e7,_.f8],   //         a3-f8      6
    [_.a1,_.b2,_.c3,_.d4,_.e5,_.f6,_.g7,_.h8], //         a1-h8  8 (a long diagonal)   "Larsen Diagonal"
    [_.c1,_.d2,_.e3,_.f4,_.g5,_.h6],    //         c1-h6     6
    [_.e1,_.f2,_.g3,_.h4],     //         e1-h4          4                     "Fools Mate Diagonal"
    [_.g1,_.h2],    //         g1-h2                 2
        
    [_.g8,_.h7],     //         g8-h7                2
    [_.e8,_.f7,_.g6,_.h5],    //         e8-h5            4                     "Scholars Mate Diagonal"
    [_.c8,_.d7,_.e6,_.f5,_.g4,_.h3],   //         c8-h3      6
    [_.a8,_.b7,_.c6,_.d5,_.e4,_.f3,_.g2,_.h1], //         a8-h1  8 (a long diagonal)   "Hungarian Diagonal"
    [_.a6,_.b5,_.c4,_.d3,_.e2,_.f1],     //         a6-f1    6
    [_.a4,_.b3,_.c2,_.d1],      //         a4-d1         4                     "Rubinstein Diagonal"
    [_.a2,_.b1],     //         a2-b1                2
        
    [_.a1],       //         a1-a1                 1 (a single square)
    [_.a3,_.b2,_.c1],     //         a3-c1             3
    [_.a5,_.b4,_.c3,_.d2,_.e1],    //         a5-e1        5                     "Bogo-Indian Diagonal"
    [_.a7,_.b6,_.c5,_.d4,_.e3,_.f2,_.g1],   //         a7-g1    7
    [_.b8,_.c7,_.d6,_.e5,_.f4,_.g3,_.h2],  //         b8-h2    7
    [_.d8,_.e7,_.f6,_.g5,_.h4],   //         d8-h4         5
    [_.f8,_.g7,_.h6],       //         f8-h6           3
    [_.h8]    //         h8-h8                    1 (a single square)
];

export { files, ranks, diagonals }