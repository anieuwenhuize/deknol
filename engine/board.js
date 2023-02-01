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

const w_captures = [], 
      b_captures = [];

const squares = {
    
        grid,
        count: () => 8 * 8    
}


export { squares };