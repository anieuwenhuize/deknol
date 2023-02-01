import { squares, getCoordsFromAlgabraic } from '../engine/board'

test('The board contains 64 squares', () => {
    let count = squares.reduce((sum, rank) => sum + rank.length, 0)
    expect(count).toBe(64)
})

  

// internal test
test('The technical board accepts e4 as file: 4, rank: 3', () => {
    let coords1 = getCoordsFromAlgabraic("e4");
    expect(coords1.file).toBe(4)
    expect(coords1.rank).toBe(3)
})
