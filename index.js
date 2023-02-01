#!/c/dev/deknol node
import * as board from './engine/board.js'

let squares = board.squares();

console.log('Welcome to De Knol.');
console.log(`A chess board has ${squares} squares.`);