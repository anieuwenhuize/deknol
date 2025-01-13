const _ = '';

// board is in WYSIWYG format
let squares = new Array(8 * 8),
    captures = [];

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

const _get = (coord) => {
    let index = squares.indexOf(coord);
    return squares[index];
};

const _set = (coord, piece) => {
    let index = squares.indexOf(coord);
    squares[index] = piece;
};

const _isPiece = (piece) => {
    return piece === _;
}

const _clear = (coord) => {
    return _set(coord, _);
};

const _leave = (coord) => {
    let piece = _get(coord);
    _clear(coord);

    return piece;
}

const _capture = (coord, piece) => {   
    let oldPiece = _get(coord);

    if(_isPiece(oldPiece)) 
        captures.push(oldPiece);
    
    _set(coord, piece);
}

const reset = () => {
    squares = squares.map(() => _);
    captures = [];
}

const put = _set;

const peak = (coord) => {
    return _get(coord);
};

const move = (coordA, coordB) => {
    let piece = _leave(coordA);

    _capture(coordB, piece);
};

const getGrid = () => squares;
const getCaptures = () => captures;

const init = reset;

export { getGrid, getCaptures, peak, put, move, reset, init };