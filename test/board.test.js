import { squares } from '../engine/board'

test('The board contains 64 squares', () => {
    let count = squares.reduce((sum, rank) => sum + rank.length, 0)
    expect(count).toBe(64)
})