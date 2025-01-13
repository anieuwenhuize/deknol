import { squares, set, get } from '../engine/board'

test('The board contains 64 squares', () => {
    let count = squares.reduce((sum) => sum + 1, 0)
    expect(count).toBe(64)
});

test('The board should memorise a symbol set.', () => {
    let what = 'X',
        where = 'c3';

    set(where, what);
    let retrieved = get(where);

    expect(retrieved).toEqual(what);
});