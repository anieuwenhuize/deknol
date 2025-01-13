const _ = '';

// board is in WYSIWYG format
const squares = [
    _, _, _, _, _, _, _, _, // 8th rank (56-63)
    _, _, _, _, _, _, _, _, // 7th rank (48-55)
    _, _, _, _, _, _, _, _, // 6th rank (40-47)
    _, _, _, _, _, _, _, _, // 5th rank (32-39)
    _, _, _, _, _, _, _, _, // 4th rank (24-31)
    _, _, _, _, _, _, _, _, // 3rd rank (16-23)
    _, _, _, _, _, _, _, _, // 2nd rank (8-15)
    _, _, _, _, _, _, _, _  // 1st rank (0-7)
];

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

const get = (coord) => {
    let index = squares.indexOf(coord);
    return squares[index];
};

const set = (coord, symbol) => {
    let index = squares.indexOf(coord);
    squares[index] = symbol;
};

const captures = {
    white: [],
    black: []
}

export { squares, captures, get, set };