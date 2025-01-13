import * as board from '../engine/board'

test('The board contains 64 squares', () => {
    board.init();

    let count = board
        .getGrid().length;

    expect(count).toBe(64)
});

test('The board should memorise a piece set.', () => {
    board.init();

    let what = 'X',
        where = 'c3';

    board.put(where, what);
    let retrieved =board.peak(where);

    expect(retrieved).toEqual(what);
});

test('The board should move a piece.', () => {
    board.init();

    let what = 'X',
        from = 'c3',
        to = 'f6';

    board.put(from, what);

    board.move(from, to);

    let retrieved = board.peak(to);

    expect(retrieved).toEqual(what);
});