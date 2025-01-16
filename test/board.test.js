import * as board from '../engine/board'

test('The board of (8 * 8) contains 64 squares', () => {
    board.init(8, 8);

    let count = board
        .getGrid().length;

    expect(count).toBe(64)
});

test('The board should memorise a piece set.', () => {
    board.init(1, 1, ['aa']);

    let what = 'X',
        where = 'c3';

    board.set(where, what);
    let retrieved =board.get(where);

    expect(retrieved).toEqual(what);
});