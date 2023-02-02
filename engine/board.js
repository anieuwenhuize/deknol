const squares = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 8th rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 7th rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 6th rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 5th rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 4th rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 3rd rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 2nd rank
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']  // 1st rank
];

const pieces = {
    white: { king: 'K', queen: 'Q', rook: 'R', bishop: 'B', knight: 'N', pawn: 'P' },
    black: { king: 'k', queen: 'q', rook: 'r', bishop: 'b', knight: 'n', pawn: 'p' }
}

const captures = {
    white: [],
    black: []
}

export { squares, captures, pieces };