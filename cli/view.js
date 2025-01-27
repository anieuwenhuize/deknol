const show = (squares)  => {

//    1  2  3
//
// 1  0 |   | 
//   ---+---+---
// 2    |   | x
//   ---+---+---
// 3    | 0 | 

// use Minimax algorithm

    let currentRank = 8 + 1;
    squares.forEach(rank => {
        currentRank--;
        
        let a = rank[0],
            b = rank[1],
            c = rank[2],
            d = rank[3],
            e = rank[4],
            f = rank[5],
            g = rank[6],
            h = rank[7];

            let row =`${currentRank} [${a}|${b}|${c}|${d}|${e}|${f}|${g}|${h}]`
            console.log(row);
    });
    console.log('.  A B C D E F G H');
}

const intro = () => {
    console.clear()
    console.log('Welcome to De Knol.');
    console.log('The chess engine with all four legs solid on the ground.');
}

const clr = () => console.clear()

export { show, intro, clr }