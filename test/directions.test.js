import { files, ranks, diagonals } from '../engine/directions'

test('The board contains 8 files', () => {
    let count = files.length;
    expect(count).toBe(8)
})

test('The board contains 8 ranks', () => {
    let count = ranks.length;
    expect(count).toBe(8)
})

test('The board contains 26 diagonals', () => {
    let count = diagonals.filter(diag => diag.length > 1).length;
    expect(count).toBe(26)
})