import { squares, algabraicToGridCoords } from '../engine/board'

test('The board contains 64 squares', () => {
    expect(squares.count()).toBe(64)
})

// internal test
test('The technical board accepts e4 as file: 4, rank: 3', () => {
    let coords1 = algabraicToGridCoords("e4");
    expect(coords1.file).toBe(4)
    expect(coords1.rank).toBe(3)
})
