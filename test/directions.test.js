import { files, ranks, diagonals } from '../engine/directions'

test('The board contains 8 files', () => {
    let count = files.length;
    expect(count).toBe(8)
})

test('The board contains 8 ranks', () => {
    let count = ranks.length;
    expect(count).toBe(8)
})

test('The board contains 32 diagonals', () => {
    let count = diagonals.length;
    expect(count).toBe(32)
})