import * as board from './playableboard.js'

const _ = '';

// board is in WYSIWYG format
const coords = [
    'a8', 'b8', 'c8','d8', 'e8', 'f8', 'g8', 'h8',
    'a7', 'b7', 'c7','d7', 'e7', 'f7', 'g7', 'h7',
    'a6', 'b6', 'c6','d6', 'e6', 'f6', 'g6', 'h6',
    'a5', 'b5', 'c5','d5', 'e5', 'f5', 'g5', 'h5',
    'a4', 'b4', 'c4','d4', 'e4', 'f4', 'g4', 'h4',
    'a3', 'b3', 'c3','d3', 'e3', 'f3', 'g3', 'h3',
    'a2', 'b1', 'c1','d1', 'e1', 'f1', 'g1', 'h1',
    'a1', 'b1', 'c1','d1', 'e1', 'f1', 'g1', 'h1'
];

const diagonals = [
    [a8],                                     // a8-a8    1
    [a7, b8],                                // a7-b8    2
    [a6, b7, c8],                           // a6-c8    3
    [a5, b6, c7, d8],                      // a5-d8    4   "Caro-Kann Diagonal"
    [a4, b5, c6, d7, e8],                 // a4-e8    5   "Spanish Diagonal"
    [a3, b4, c5, d6, e7, f8],            // a3-f8    6
    [a2, b3, c4, d5, e6, f7, g8],       // a2-g8    7   Italian Diagonal
    [a1, b2, c3, d4, e5, f6, g7, h8],  // a1-h8    8   "Larsen Diagonal"
    [b1, c2, d3, e4, f5, g6, h7],       // b1-h7    7
    [c1, d2, e3, f4, g5, h6],            // c1-h6    6
    [d1, e2, f3, g4, h5],                 // d1-h5    5
    [e1, f2, g3, h4],                      // e1-h4    4   "Fools Mate Diagonal"
    [f1, g2, h3],                           // f1-h3    3
    [g1, h2],                                // g1-h2    2
    [h1],                                     // h1-h1    1
        
    [h8]                                      // h8-h8    1
    [g8, h7],                                // g8-h7    2
    [f8, g7, h6],                           // f8-h6    3
    [e8, f7, g6, h5],                      // e8-h5    4   "Scholars Mate Diagonal"
    [d8, e7, f6, g5, h4],                 // d8-h4    5
    [c8, d7, e6, f5, g4, h3],            // c8-h3    6
    [b8, c7, d6, e5, f4, g3, h2],       // b8-h2    7
    [a8, b7, c6, d5, e4, f3, g2, h1],  // a8-h1    8   "Hungarian Diagonal"
    [a6, b5, c4, d3, e2, f1],            // a6-f1    6
    [a4, b3, c2, d1],                      // a4-d1    4   "Rubinstein Diagonal"
    [a2, b1],                                // a2-b1    2
        
    [a1],                                     // a1-a1    1
    [a3, b2, c1],                           // a3-c1    3
    [a5, b4, c3, d2, e1],                 // a5-e1    5   Bogo-Indian Diagonal"
    [a7, b6, c5, d4, e3, f2, g1],       // a7-g1    7




];


board.init(8, 8, coords, _);


