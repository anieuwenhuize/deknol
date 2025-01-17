import * as board from '../engine/board'

test('The board of (8 * 8) contains 64 squares', () => {
    board.init(8, 8);

    let count = board
        .getAll().length;

    expect(count).toBe(64)
});

test('getRowFor a board of (2* 2) yields 2 rows', () => {
    board.init(2, 2, ['a1', 'a2', 'b1', 'b2']);

    let count = board
        .getAllByRow('a').length;

    expect(count).toBe(2)
});

test('getColumnFor a board of (2* 2) yields 2 rows', () => {
    board.init(2, 2, ['a1', 'a2', 'b1', 'b2']);

    let count = board
        .getAllByCol('2').length;

    expect(count).toBe(2)
});

test('The board should memorise a symbol set.', () => {
    board.init(1, 1, ['aa']);

    let what = 'X',
        where = 'c3';

    board.set(where, what);
    let retrieved =board.get(where);

    expect(retrieved).toEqual(what);
});