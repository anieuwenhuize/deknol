
let map = Map(),
    captures = { white: [], black : [] };





// let fromSan 

let fromFEN = (fenStr) => {

    const pattern = /([\w-]{1,8})/gm
    const parsed = fenStr.match(pattern);

    if(parsed.length > 12) throw new Error("Invalid FEN given: '" + fenStr + "'");

    let rank8th = parsed[0];
    let rank7th = parsed[1];
    let rank6th = parsed[2];
    let rank5th = parsed[3];
    let rank4th = parsed[4];
    let rank3th = parsed[5];
    let rank2th = parsed[6];
    let rank1th = parsed[7];

    let activeColour = parsed[8];
    let castlingRights = parsed[9];
    let enPassantTargets = parsed[10];
    let plyMoves = parsed[11];

};

let newGame = () => {

    let startingPosition = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

    return fromFEN(startingPosition);
};




export { fromFEN, newGame };