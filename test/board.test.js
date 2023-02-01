import * as board from '../engine/board'

test('The board contains 64 squares', () => {
    expect(board.squares.count()).toBe(64)
})