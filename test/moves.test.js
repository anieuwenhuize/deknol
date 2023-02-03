import { test_move } from '../engine/moves.js'

const moves = {
    isPawnMove: false, 
    isRookMove: false, 
    isBisshopMove: false, 
    isKnightMove: false,
    isQueenMove: false,
    isKingMove: false,
    isKingsideCastling: false,
    isQueensideCastling: false
}

const check_all = (expects, actuals) => {
    expect(actuals.isPawnMove).toBe(expects.isPawnMove)
    expect(actuals.isRookMove).toBe(expects.isRookMove)
    expect(actuals.isBisshopMove).toBe(expects.isBisshopMove)
    expect(actuals.isKnightMove).toBe(expects.isKnightMove)
    expect(actuals.isQueenMove).toBe(expects.isQueenMove)
    expect(actuals.isKingMove).toBe(expects.isKingMove)
    expect(actuals.isKingsideCastling).toBe(expects.isKingsideCastling)
    expect(actuals.isQueensideCastling).toBe(expects.isQueensideCastling)
}

test('simple pawn move: e4', () => {
    let actuals = test_move('e4')
    let expects = {...moves}
    expects.isPawnMove = true;

    check_all(expects, actuals)
})

test('simple bisshop move: Bf3', () => {
    let actuals = test_move('Bf3')
    let expects = {...moves}
    expects.isBisshopMove = true;

    check_all(expects, actuals)
})