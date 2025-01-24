import * as board from '../engine/board'

test('The board of (2 * 2) contains 4 squares', () => {
    board.init(2, 2);

    let count = board
        .getAll().length;

    expect(count).toBe(4)
});

test('getCol a board of (2 * 2) yields 2 fields', () => {
    board.init(2, 2);

    let firstCol = board
        .getCol(0),
        secondCol = board
        .getCol(1);

    expect(firstCol.length).toBe(2);
    expect(secondCol.length).toBe(2);
});

// test('getRow a board of (2 * 2) yields 2 fields', () => {
//     board.init(2, 2);

//     let count = board
//         .getCol(0).length;

//     expect(count).toBe(2)
// });