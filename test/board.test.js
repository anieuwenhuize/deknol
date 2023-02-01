import { squares } from '../engine/board'

test('The board contains 64 squares', () => {
    expect(squares.count).toBe(64)
})