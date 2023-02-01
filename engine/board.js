const grid = [
    ['', '', '', '', '', '', '', ''], // 1st rank
    ['', '', '', '', '', '', '', ''], // 2nd rank
    ['', '', '', '', '', '', '', ''], // 3rd rank
    ['', '', '', '', '', '', '', ''], // 4th rank
    ['', '', '', '', '', '', '', ''], // 5th rank
    ['', '', '', '', '', '', '', ''], // 6th rank
    ['', '', '', '', '', '', '', ''], // 7th rank
    ['', '', '', '', '', '', '', ''] // 8th rank
];

const pieces = {
    king: 'K', queen: 'Q', bishop: 'B', knight: 'N', pawn: 'p'
}

const w_captures = [], 
      b_captures = [];

const squares = {
    
        grid,
        count: () => grid.reduce((sum, rank) => sum + rank.length, 0)    
}

// Example: e4 -> { rank: 3, file: 4 }
const algabraicToGridCoords = (loc) => {
    let coord = [...loc];
    let f = "abcdefgh".indexOf(coord[0]);
    let r = parseInt(coord[1]) -1;

    return { rank: r, file: f }
}

const initGame = () => {


};


export { squares, algabraicToGridCoords };